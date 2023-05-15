export default function addNode(strNode, strClass, parentNode, strIn = '') {
  const node = document.createElement(`${strNode}`);
  node.className = `${strClass}`;
  if (strIn.length) {
    node.innerHTML = strIn;
  }
  parentNode.append(node);
}
