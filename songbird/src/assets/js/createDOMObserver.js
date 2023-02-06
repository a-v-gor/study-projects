export function createDOMObserver (callback) {
  const DOMobserver = new MutationObserver(callback);
  DOMobserver.observe(document.body, {
    "childList": true
  });
}