var counter = 0;
var sequenceArray = [];

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
    };

})();

function left45Click() {
    console.log("Pressed 45 left");
    sequenceArray.push("Left 45");
    counter++;
    textAreaFunc();
}

function left90Click() {
    console.log("Pressed 90 left");
    sequenceArray.push("Left 90");
    counter++;
    textAreaFunc();
}

function right90Click() {
    console.log("Pressed right 90");
    sequenceArray.push("Right 90");
    counter++;
    textAreaFunc();
}

function right45Click() {
    console.log("Pressed right 45");
    sequenceArray.push("Right 45");
    counter++;
    textAreaFunc();
}

function forwardClick() {
    console.log("Pressed forward");
    sequenceArray.push("Forward");
    counter++;
    textAreaFunc();
}

function backwardsClick() {
    console.log("Pressed backwards");
    sequenceArray.push("Backwards");
    counter++;
    textAreaFunc();
}

function clearClick() {
    document.getElementById("Textbox").innerHTML = ""; 
    console.log("Pressed clear");
    for (var i = 0; i < counter; i++) {
        sequenceArray.pop();
    }
    counter = 0;
    console.log("Pressed empty. Array and counter resat");
}

function startClick() {
    var datadump = document.getElementById("Textbox").value;
    var buffer = "Placeholder - this button doesn't do anything... YET!";
    document.getElementById("Textbox").innerHTML = datadump + buffer;
    console.log("Pressed start");
}

function undoClick() {
    sequenceArray.pop();
    counter--;
    console.log("Pressed undo");
    textAreaFunc();
}

function textAreaFunc() {
    document.getElementById("Textbox").innerHTML = "";

    for (i = 0; i < counter; i++) {
        var buffer = ""+sequenceArray[counter];
        document.getElementById("Textbox").innerHTML = sequenceArray;
        console.log(buffer);
    }
}
