// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        console.log("Ready");
        document.getElementById("bluetooth").click();

    };
})();

function send() {
    //bluetoothSerial.write("Sent!");
    var sendText = document.getElementById("sendingText").value;
    bluetoothSerial.write(sendText+"\n");
}
function init() {
    var MAC = document.getElementById("MAC").value;
    bluetoothSerial.connectInsecure(MAC, success, failure);
    function success() {
        alert('BT connection success');
    }
    function failure() {
        alert('BT connection failure');
    }
    bluetoothSerial.subscribe('\n', appendData);
    function appendData(data) {
        console.log(data);
        if (data[0] == '$')
        {
            // $,1111,2222,3333,4444,5555 proper string
            var split = data.split(",");
            for (i = 0; i <= 1; i++){
                document.getElementsByClassName('sensor1')[i].innerHTML = split[1];
                document.getElementsByClassName('sensor2')[i].innerHTML = split[2];
                document.getElementsByClassName('sensor3')[i].innerHTML = split[3];
                document.getElementsByClassName('tachR')[i].innerHTML = split[4];
                document.getElementsByClassName('tachL')[i].innerHTML = split[5];
            }
        }
        else {
            document.getElementById("sendingText").value = data;
        }

        var datadump = document.getElementById("datadump").value;
        document.getElementById("datadump").innerHTML = data + datadump;

    }
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function success() {
    //var element = document.getElementById("deviceready");
    //element.innerHTML("Connected");
    console.log("Success");
}

function failure() {
    //var element = document.getElementById("deviceready");
    //element.innerHTML("Failed");
    console.log("Failed");
}