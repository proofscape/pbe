## 3.0 (221018)

Breaking Changes:

* The extension has been redesigned so that it can work with instances of PISE being
  hosted anywhere, not just under certain domains. This means that instead of declaring
  content script matches in the manifest, we now provide a browser action, with which
  the user can "activate" the extension for the URL pattern found in the active tab.

Requires:

* `pfsc-pdf >= 3.0.0` to display appropriate instructions in the PDF panel, when the
  extension has not yet been "activated".

Other improvements:

* Provide an onboarding dialog.
* Declare minimum browser version in manifest.
* Upgrade webextension-polyfill library.
