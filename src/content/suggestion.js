

// The user has triggered a correction by executing this script
// (A) Make sure that there is no current suggestion from this script

// (B) If not, create a suggestion box at the top left corner of the selection and wait for a button click


//  (B1) Get the bounding box of the selection
let selection = null;
selection = window.getSelection();
if (selection === null || selection.rangeCount === 0 || selection.toString().length === 0) { //If there is nothing in the selection, do nothing
    throw "suggestion.js error with getting selection : No selection by the user";
}
console.log("Selection by user: ", selection.toString());

let rangeOfSelection = selection.getRangeAt(0); //Gets the first range 
let rect = rangeOfSelection.getBoundingClientRect(); // Creates a rectangle that outlines the highlighted text
console.log(rect);

function createBox(top, left, width, height, parent) {
    let box = document.createElement("iframe");
    box.src = "src/content/suggestion.html"
    box.style.top = (top + window.scrollY) + "px";
    box.style.left = (left + window.scrollX) + "px";
    box.style.position = "absolute";
    parent.appendChild(box);
    return box;
}
//  (B2) At the top left corner of the bounding box, create an iframe that will link to suggestion.html
try {
    let suggestionBox = createBox(rect.bottom, rect.left, rect.width, rect.height, document.body);
}
catch (err) {
    console.log("Failed to generate box", err);
    throw("suggestion.js failed to generate box.");
}
console.log("box that was created", suggestionBox);

// // (C) React to clicks 

// // (D) Return and finish normal functioning.
undefined;

