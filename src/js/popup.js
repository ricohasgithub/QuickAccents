
// Search Query Text Nodes (H1)

// Text node for the A search field query (Uppercase)
const aQueryUp = "À Â";
// Text node for the a search field query (Lowercase)
const aQueryLow = "à â";

// Text node for the E search field query (Uppercase)
const eQueryUp = "È É Ê Ë";
// Text node for the e search field query (Lowercase)
const eQueryLow = "è é ê ë";

// Text node for the I search field query (Uppercase)
const iQueryUp = "Î Ï";
// Text node for the i search field query (Lowercase)
const iQueryLow = "î ï";

// Text node for the O search field query (Uppercase)
const oQueryUp = "Ô Œ";
// Text node for the o search field query (Lowercase)
const oQueryLow = "ô œ";

// Text node for the U search field query (Uppercase)
const uQueryUp = "Ù Û Ü";
// Text node for the u search field query (Lowercase)
const uQueryLow = "ù û ü";

// Text node for the Y search field query (Uppercase)
const yQueryUp = "Ÿ";
// Text node for the y search field query (Lowercase)
const yQueryLow = "ÿ";


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
