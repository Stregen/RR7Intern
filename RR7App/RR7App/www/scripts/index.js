var counter = 0;
var sequenceArray = [];
var binaryArray = [];

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
    };

})();


function init() {
    try {
        var mac = document.getElementById("MAC").value;
        bluetoothSerial.connectInsecure(mac, success, failure);
        function success() {
            alert('Success');
        }
        function failure() {
            alert('Failure');
        }
    } catch (err) {
        alert('Error in BlueTooth. Make sure you have enabled BlueTooth')
    }
}

    function left45Click() {
        console.log("Pressed 45 left");
        sequenceArray.push("../images/left45smol.png");
        binaryArray.push("0110");
        counter++;
        textAreaFunc();
    }

    function left90Click() {
        console.log("Pressed 90 left");
        sequenceArray.push("../images/left90smol.png");
        binaryArray.push("0101");
        counter++;
        textAreaFunc();
    }

    function right45Click() {
        console.log("Pressed right 45");
        sequenceArray.push("../images/right45smol.png");
        binaryArray.push("0100");
        counter++;
        textAreaFunc();
    }

    function right90Click() {
        console.log("Pressed right 90");
        sequenceArray.push("../images/right90smol.png");
        binaryArray.push("0011");
        counter++;
        textAreaFunc();
    }

    function forwardClick() {
        console.log("Pressed forward");
        sequenceArray.push("../images/forwardssmol.png");
        binaryArray.push("0001");
        counter++;
        textAreaFunc();
    }

    function backwardsClick() {
        console.log("Pressed backwards");
        sequenceArray.push("../images/backwardssmol.png");
        binaryArray.push("0010");
        counter++;
        textAreaFunc();
    }

    function clearClick() {
        for (var i = 0; i < counter; i++) {
            sequenceArray.pop();
        }

        for (var i = 0; i < counter+1; i++) {
            binaryArray.pop();
        }

        counter = 0;
        console.log("Pressed clear. Array and counter resat");
        document.getElementById("Textbox").innerHTML = "";
    }

    function startClick() {
        console.log("Pressed start");
        var datadump = document.getElementById("Textbox").value;
        var buffer = "Placeholder - this button doesn't do anything... YET!";
        document.getElementById("Textbox").innerHTML = datadump + buffer;
        binaryArray.push("0000,");
        var stringToSend = binaryArray.toString();
        bluetoothSerial.write(stringToSend);
        console.log(stringToSend);
    }

    function undoClick() {
        console.log("Pressed undo");
        sequenceArray.pop();
        binaryArray.pop();
        counter--;
        if (counter < 0) { counter = 0 };
        textAreaFunc();
    }

    //Add images to DIV
    function textAreaFunc() {
        console.log(counter);
        console.log(sequenceArray[counter-1]);
        console.log(binaryArray);
        document.getElementById("Textbox").innerHTML = "";
        for (i = 0; i < counter; i++) {
            //var s = sequenceArray[counter]
            //var imgPath = "<img src='" + s + "' />";
            //var buffer = "" + sequenceArray[counter];
            //document.getElementById("Textbox").innerHTML += imgPath;
            //console.log(imgPath);

            //New try
            var img = document.createElement('img');
            img.setAttribute('src', sequenceArray[i]);
            document.getElementById("Textbox").appendChild(img);

        }
    }

    var createImage = function (src) {
        var img = new Image();
        img.src = src;
        return img;
    };
