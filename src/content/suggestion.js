

// The user has triggered a correction by executing this script
// (A) Make sure that there is no current suggestion from this script

// (B) If not, create a suggestion box at the top left corner of the selection and wait for a button click
//  (B1) Get the bounding box of the selection
let selection = null;
selection = window.getSelection();
if (selection === null || selection.rangeCount === 0 || selection.toString().length === 0) { //If there is nothing in the selection, do nothing
    throw "suggestion.js error with getting selection : No selection by the user";
}
console.log("created selection : ", selection.toString());

let rangeOfSelection = selection.getRangeAt(0); //Gets the first range 
let rect = rangeOfSelection.getBoundingClientRect(); // Creates a rectangle that outlines the highlighted text
console.log(rect);

//  (B2) At the top left corner of the bounding box, create an iframe that will link to suggestion.html

let suggestionBox = document.createElement("div");
// suggestionBox.src = "src/content/suggestion.html";
suggestionBox.title = "SuggestionBox";
suggestionBox.style.top = "200px";
suggestionBox.style.right = "0px";
suggestionBox.style.width = rect.width.toString() + "px";
suggestionBox.style.height = rect.height.toString() + "px";
suggestionBox.style.backgroundColor = "black";
document.body.appendChild(suggestionBox);
console.log(suggestionBox);

// // (C) React to clicks 

// // (D) Return and finish normal functioning.
undefined;