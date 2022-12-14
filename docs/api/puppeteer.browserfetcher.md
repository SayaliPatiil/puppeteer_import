---
sidebar_label: BrowserFetcher
---

# BrowserFetcher class

BrowserFetcher can download and manage different versions of Chromium and Firefox.

**Signature:**

```typescript
export declare class BrowserFetcher
```

## Remarks

BrowserFetcher operates on revision strings that specify a precise version of Chromium, e.g. `"533271"`. Revision strings can be obtained from [omahaproxy.appspot.com](http://omahaproxy.appspot.com/). In the Firefox case, BrowserFetcher downloads Firefox Nightly and operates on version numbers such as `"75"`.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `BrowserFetcher` class.

## Example

An example of using BrowserFetcher to download a specific version of Chromium and running Puppeteer against it:

```ts
const browserFetcher = puppeteer.createBrowserFetcher();
const revisionInfo = await browserFetcher.download('533271');
const browser = await puppeteer.launch({
  executablePath: revisionInfo.executablePath,
});
```

**NOTE** BrowserFetcher is not designed to work concurrently with other instances of BrowserFetcher that share the same downloads directory.

## Methods

| Method                                                                         | Modifiers | Description                                                     |
| ------------------------------------------------------------------------------ | --------- | --------------------------------------------------------------- |
| [canDownload(revision)](./puppeteer.browserfetcher.candownload.md)             |           | Initiates a HEAD request to check if the revision is available. |
| [download(revision, progressCallback)](./puppeteer.browserfetcher.download.md) |           | Initiates a GET request to download the revision from the host. |
| [host()](./puppeteer.browserfetcher.host.md)                                   |           |                                                                 |
| [localRevisions()](./puppeteer.browserfetcher.localrevisions.md)               |           |                                                                 |
| [platform()](./puppeteer.browserfetcher.platform.md)                           |           |                                                                 |
| [product()](./puppeteer.browserfetcher.product.md)                             |           |                                                                 |
| [remove(revision)](./puppeteer.browserfetcher.remove.md)                       |           |                                                                 |
| [revisionInfo(revision)](./puppeteer.browserfetcher.revisioninfo.md)           |           |                                                                 |
