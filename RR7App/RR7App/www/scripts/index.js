(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
    };

})();

function left45Click() {
    var datadump = document.getElementById("Textbox").value;
    var buffer =" Yo";
    document.getElementById("Textbox").innerHTML = datadump+buffer;
    console.log("Pressed");
}

function left90Click() {
    var datadump = document.getElementById("Textbox").value;
    var buffer = " Yo";
    document.getElementById("Textbox").innerHTML = datadump + buffer;
    console.log("Pressed");
}

function right90Click() {
    var datadump = document.getElementById("Textbox").value;
    var buffer = " Yo";
    document.getElementById("Textbox").innerHTML = datadump + buffer;
    console.log("Pressed");
}

function right45Click() {
    var datadump = document.getElementById("Textbox").value;
    var buffer = " Yo";
    document.getElementById("Textbox").innerHTML = datadump + buffer;
    console.log("Pressed");
}

function forwardClick() {
    var datadump = document.getElementById("Textbox").value;
    var buffer = " Yo";
    document.getElementById("Textbox").innerHTML = datadump + buffer;
    console.log("Pressed");
}

function backwardsClick() {
    var datadump = document.getElementById("Textbox").value;
    var buffer = " Yo";
    document.getElementById("Textbox").innerHTML = datadump + buffer;
    console.log("Pressed");
}

function clearClick() {
    document.getElementById("Textbox").innerHTML = ""; 
    console.log("Pressed");
}

function startClick() {
    var datadump = document.getElementById("Textbox").value;
    var buffer = " Yo";
    document.getElementById("Textbox").innerHTML = datadump + buffer;
    console.log("Pressed");
}

function undoClick() {
    var datadump = document.getElementById("Textbox").value;
    var buffer = " Yo";
    document.getElementById("Textbox").innerHTML = datadump + buffer;
    console.log("Pressed");
}
