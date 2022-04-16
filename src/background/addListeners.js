// (A) Adds an event listener to the browser. It listens for the command (defiend in manifest.json)
// and, if it is the correct command, triggers the correction code.
browser.commands.onCommand.addListener(function (command) {
    if (command === "trigger-correction") {
        console.log("I was triggered by the keyboard shortcut!")
    }
});

browser.tabs.query({currentWindow: true}, (input) => console.log("TRIGGERED WOOHOO"));