# Design Rationale

#### Oct 15, 2020

Our aim has been to design a browser extension that will work on both Chrome and Firefox, and will support the
Proofscape ISE application in automatically downloading PDFs over the Internet, as well as storing/retrieving
these PDF byte arrays with a dedicated on-disk cache.

Our design decisions have been based on several factors. These include both _design principles_, and _facts_ about
the _rules_ and _behaviors_ of the two browsers.

## Our design principles include:

* **(DP1)** Alter the browser's behavior as little as possible.
* **(DP2)** Request as few permissions as possible.
* **(DP3)** Try to find one procedure that works on both browsers, but accept browser-specific procedures
            if it allows a significant performance improvement.
* **(DP4)** Try to keep the app responsive at all times, perhaps even at the cost of (moderately) lowered performance.


## Relevant facts about the browsers include:


### Fetch Rules:

* Firefox allows cross-origin fetch (COF) in both content scripts (CS) and background scripts (BGS).

* Chrome allows COF only in BGS. Chrome used to allow COF in CS, just like Firefox, but has now
disallowed it largely in response to the Spectre vulnerability. Firefox seems to be unaffected by this, perhaps
due to its use of a different rendering engine. In Chrome the situation has been rapidly changing over the last
year (2020) or so. See the following references:
    - <https://www.chromium.org/Home/chromium-security/extension-content-script-fetches>
    - <https://www.chromestatus.com/feature/5629709824032768>
    - <https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md> 

* If we artificially insert `Access-Control-Allow-Origin: *` (ACAO) headers on the HTTP responses that deliver PDFs,
  then, on both browsers, we can COF from Javascript running at any level, including page scripts (PS) as well as CS and BGS.


### Transfer Speeds:

It takes time to move large PDF byte arrays between various script levels (PS, CS, BGS), and into and out of storage.
In tests on Chrome 85.0.4183.121 and Firefox Developer Edition 82.0b7, both running on a 2019 MacBook Pro (see our
`test_exts` testing repo for more details), we tested several transfer types, and found the average speeds shown in Table 1.

                                              Chrome           FirefoxDE
                                          MB/s     10MB      MB/s      10MB
                        BGS -> storage    1.45     6.9s      0.38     26.2s
                         CS -> storage    1.58     6.3s      0.36     27.6s
                        storage -> BGS    3.00     3.3s      2.30      4.3s
                         storage -> CS    2.94     3.4s      2.35      4.3s
                              CS -> PS    4.04     2.5s      4.74      2.1s
                         BGS -> CS rep    3.21     3.1s      0.30     33.0s
                         BGS -> CS tsm    2.82     3.5s      1.09      9.2s
                         BGS -> CS prt    4.05     2.5s      1.62      6.2s
                         CS -> BGS snd    4.54     2.2s      1.77      5.7s
                         CS -> BGS prt    5.55     1.8s      1.67      6.0s

         Table 1: Average transfer speeds in Chrome and Firefox. Speeds are given in MB/s, and we show how long
         it would take to move 10 MB at this speed.

For the `BGS -> CS` tests:

* `rep` means a reply to a CS `browser.runtime.sendMessage` in a BGS `browser.runtime.onMessage` listener
* `tsm` means a BGS `browser.tabs.sendMessage`
* `prt` means a BGS `Port.postMessage`

For the `CS -> BGS` tests:

* `snd` means a CS `browser.runtime.sendMessage`
* `prt` means a CS `Port.postMessage`

And `CS -> PS` means via `window.postMessage`.


### Blocking Behavior:

* Firefox:
    - CS activity seems to block the main thread. Spinners freeze, and the app becomes unresponsive.
    - BGS activity does _not_ seem to block the main thread.
* Chrome:
    - Neither CS nor BGS activity seems to block the main thread.

--------------------------------------------------------------------------------
    
## Design Decisions

### No ACAO headers, at least for now

We decided _not_ to insert ACAO headers, at least for now.
We have designed and tested an `acao.js` module, which we retain in the repo for possible future use,
but right now it is totally inactive, i.e. is not used by the extension at all.

By omitting ACAO headers we follow design principles DP1 and DP2.
On the other hand, this forces us to evaluate DP3. Without ACAO headers, Chrome can only COF in BGS.
So to keep the behavior in both browsers the same, we would have to do COF in BGS in Firefox too.
But this would introduce significant performance penalties, since BGS -> CS communication is so slow
in Firefox. Therefore we have decided (see below) to implement different (in fact configurable) fetch
behavior in the two browsers.

The advantage of using ACAO headers would be to
allow COF at the PS level. This would mean PDFs could appear before any transfer delays, at least on
initial fetch. But when a user is interested in a PDF, we expect them to fetch it once, and thereafter
pull it from the cache. So the "fetch experience" is a marginal case. The "retrieve from storage experience" is
expected to be the daily experience for regular users.

In the future we may provide "Use ACAO headers" as a configurable option under "advanced settings" on the
options page, switched off by default.

In particular, using ACAO headers may become motivated if Firefox ever elects to follow Chrome in forbidding COF
at the CS level. That would mean either moving fetch to BGS, and thus introducing the significant `BGS -> CS` transfer
delays of Firefox, or else inserting ACAO headers in order to move fetch to PS.


### Ports for CS <--> BGS

In Firefox, `BGS -> CS prt` was the fastest means of `BGS -> CS` communication by far.
In particular, the means of BGS responding to CS that is the easiest to implement
(`BGS -> CS rep`) turns out, unfortunately, to be completely untenable in Firefox, where it is
more than 5 times as slow as communication via Port.

The two `CS -> BGS` methods were roughly equal in speed in Firefox, while
in Chrome the `prt` methods were fastest for both directions `CS <--> BGS`.

Meanwhile, we do need to allow for `BGS -> CS` communcation that is _initiated_ on the BGS side.
We need this at least so that config controls on the options page can configure things (like the
`CsDownloadMgr`) living on the CS side. Ports seem best for this, since we don't want to request
the `tabs` permission (DP2), or use `browser.tabs.sendMessage` without proper filtration.

Unfortunately, communication via Ports is the least well-supported, natively. There are no promises
or built-in response mechanisms. Therefore we use the `CsBgsPeer` class from the `browser-peers` library.
This provides a Promise-based system of requests & responses based on Ports, for peer-style communication
(either side can make a request) between CS and BGS.


### Fetching PDFs over the Internet

#### Chrome

Fetch must occur in BGS. We then send the byte array BGS -> CS via `Port.postMessage`, and then CS -> PS
via `window.postMessage`.

#### Firefox

Here there is an option to fetch in CS or BGS.

By default we fetch in CS. Then the byte array is sent `CS -> PS` via `window.postMessage` in order to be
viewed by the user, while it is also sent `CS -> BGS` via `Port.postMessage` so that the BGS can be asked
to do the storage operation. Storage is very slow on Firefox, whether from CS or BGS, but due to blocking
behavior at the CS level, `CS -> storage` cannot be tolerated. The options page becomes unresponsive while
the BGS blocks during storage, but at present we have no workaround for this.

Meanwhile, it is possible to configure fetch to occur in BGS in Firefox, since this can avoid some
CS blocking. Here principle DP4 comes into question, but the blocking during `CS -> BGS prt` seems brief
enough on moderate-sized PDFs to justify allowing it. At present, however, we have not yet added this
option to the options page.


### Retrieving PDFs from storage

Here there is an option in both browsers: We can either pull `storage -> CS` directly, or we can pull
`storage -> BGS` in the background, followed by `BGS -> CS prt`.

In Chrome there is no reason not to use `storage -> CS`.

In Firefox, the trade-off is that direct `storage -> CS` is more than twice as fast, but can block the main
thread for a significant duration. By design principle DP4, we are supposed to keep the app responsive.
Therefore, by default, Firefox uses the slower `storage -> BGS -> CS` route to retrieve PDFs from storage.

However, under "Advanced Settings" on
the options page, we provide a "Load PDFs in forefround" option, with brief explanatory text to the effect
of, "PDFs should load from cache about twice as fast, but the app may become unresponsive during loading."
Users can check the box if they wish, and now they will know why the spinner freezes during loading.