(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
    };

})();

function left45Click() {
    var datadump = document.getElementById("SequenceText").value;
    document.getElementById("SequenceText").innerHTML = "Yo" + datadump;
    console.log("Pressed");
}