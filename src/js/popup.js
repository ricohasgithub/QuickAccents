
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

window.addEventListener('load', function(evt) {

  document.getElementById("input_field").onkeyup = function() {
    let inputValue = document.getElementById("input_field").value;
    displaySearchQuery(inputValue);
  }

});

function displaySearchQuery (input) {

  // Clear the current root div
  clearRoot();

  let rootNode = document.getElementById("root");
  let displayVal = "Welcome to Quick Accents!";

  // Display prompts
  if (input === "A") {
    displayVal = aQueryUp;
  } else if (input === "a") {
    displayVal = aQueryLow;
  } else if (input === "E") {
    displayVal = eQueryUp;
  } else if (input === "e") {
    displayVal = eQueryLow;
  } else if (input === "I") {
    displayVal = iQueryUp;
  } else if (input === "i") {
    displayVal = iQueryLow;
  } else if (input === "O") {
    displayVal = oQueryUp;
  } else if (input === "o") {
    displayVal = oQueryLow;
  } else if (input === "U") {
    displayVal = uQueryUp;
  } else if (input === "u") {
    displayVal = uQueryLow;
  } else if (input === "Y") {
    displayVal = yQueryUp;
  } else if (input === "y") {
    displayVal = yQueryLow;
  } else {
    displayVal = "No Results";
  }

  // Append search query
  let queryResults = document.createElement("H1");
  let queryTextNode = document.createTextNode(displayVal);
  queryResults.appendChild(queryTextNode);

  // Display search query
  rootNode.appendChild(queryResults);

}

function clearRoot () {

  let rootNode = document.getElementById("root");

  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }

}
