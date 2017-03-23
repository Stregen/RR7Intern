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
    sequenceArray.push("../images/left45smol.png");
    console.log(sequenceArray[counter]);
    counter++;
    textAreaFunc();
}

function left90Click() {
    console.log("Pressed 90 left");
    sequenceArray.push("../images/left90smol.png");
    console.log(sequenceArray[counter]);
    counter++;
    textAreaFunc();
}

function right45Click() {
    console.log("Pressed right 45");
    sequenceArray.push("../images/right45smol.png");
    console.log(sequenceArray[counter]);
    counter++;
    textAreaFunc();
}

function right90Click() {
    console.log("Pressed right 90");
    sequenceArray.push("../images/right90smol.png");
    console.log(sequenceArray[counter]);
    counter++;
    textAreaFunc();
}

function forwardClick() {
    console.log("Pressed forward");
    sequenceArray.push("../images/forwardssmol.png");
    console.log(sequenceArray[counter]);
    counter++;
    textAreaFunc();
}

function backwardsClick() {
    console.log("Pressed backwards");
    sequenceArray.push("../images/backwardssmol.png");
    console.log(sequenceArray[counter]);
    counter++;
    textAreaFunc();
}

function clearClick() { 
    console.log("Pressed clear");
    for (var i = 0; i < counter; i++) {
        sequenceArray.pop();
    }
    counter = 0;
    console.log("Pressed empty. Array and counter resat");
    document.getElementById("Textbox").innerHTML = "";
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

//Add images to DIV
function textAreaFunc() {
    document.getElementById("Textbox").innerHTML = "";
    console.log(counter);
    for (i = 0; i < counter; i++) {
        //var s = sequenceArray[counter]
        //var imgPath = "<img src='" + s + "' />";
        //var buffer = "" + sequenceArray[counter];
        //document.getElementById("Textbox").innerHTML += imgPath;
        //console.log(imgPath);

        //New try
        var img = document.createElement('img');
        img.setAttribute('src', sequenceArray[i]);
        console.log(img.src);
        document.getElementById("Textbox").appendChild(img);
        
    }
}

var createImage = function (src) {
    var img = new Image();
    img.src = src;
    return img;
};
