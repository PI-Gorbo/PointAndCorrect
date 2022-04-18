// (A) Adds an event listener to the browser. It listens for the command (defiend in manifest.json)
// and, if it is the correct command, triggers the correction code.
browser.commands.onCommand.addListener(function (command) {
    if (command === "trigger-correction") {
        // Execute suggestion.js and report success or failure
        browser.tabs.executeScript({file:'src/content/suggestion.js'})
            .then((result)=>{console.log("Correction Listener result: ",result)},
                  (error) =>{console.log("Correction Listener error: ", error)}); 
    }
});
