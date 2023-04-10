export function getWinWidth(numwidthMax = 1279, widthMin = 767) {
  const newWinWidth = (window.innerWidth > numwidthMax) ? "desktop" : (window.innerWidth > widthMin) ? "tablet" : "mobile";
  return newWinWidth;
}