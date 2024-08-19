const addElement = (mainContainer, miniContainer, val, elementType, fontSize) => {
  const element = document.createElement(elementType);
  if (fontSize) {
    element.style.fontSize = fontSize;
  }
  if (val) {
    element.textContent = val;
  }
  miniContainer.appendChild(element);
  mainContainer.appendChild(miniContainer);
}

export { addElement };