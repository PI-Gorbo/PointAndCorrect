
// The user has triggered a correction by executing this script
// (A) Make sure that there is no current suggestion from this script

// (B) If not, create a suggestion box at the top left corner of the selection and wait for a button click
//  (B1) Get the bounding box of the selection
let selection = window.getSelection();
let rangeOfSelection = selection.getRangeAt(0); //Gets the first range 
let rect = rangeOfSelection.getBoundingClientRect();

//  (B2) At the top left corner of the bounding box, create a div that will hold the suggestions.

let suggestionBox = document.createElement("iframe");
suggestionBox.src = "src/content/suggestion.html";
document.body.appendChild(suggestionBox);

// (C) React to clicks 