export function getWinWidth() {
  const newWinWidth = (window.innerWidth > 1279) ? "desktop" : (window.innerWidth > 767) ? "tablet" : "mobile";
  return newWinWidth;
}