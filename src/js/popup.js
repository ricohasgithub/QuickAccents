

function displaySearchQuery () {

  // Clear the current root div
  clearRoot();

  let rootNode = document.getElementById("root");



}

function clearRoot () {

  let rootNode = document.getElementById("root");

  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }
  
}
