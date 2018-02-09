"use strict";

let msgInput = "";
let msgOutput = "";


// when hit enter the message disappears
    function myNewMsgs() {
        msgInput = document.getElementById("messageInput").value;
        document.getElementById("newOutputMsg").innerHTML += msgInput;
        
        document.addEventListener("keypress", (e) => {
            var key = e.key;
                console.log("Is the key Enter pressed? ", key);

            if (key == "Enter") {
                document.getElementById("newOutputMsg").innerHTML += `<div id="parentDiv"><p id="newOutputMsg">${msgInput}</p><input type="button" value="Remove message" onClick="removeElement('parentDiv', 'newOutputMessage');"></div>`;//adds each message to the msgBoard
                document.getElementById("messageInput").value = "";
            } else {
                msgInput = document.getElementById("messageInput").value;
            }

        }); 
    }                        

module.exports = {myNewMsgs};