"use strict";

let msgInput = "";
let msgOutput = "";


// when hit enter the message disappears
    msgInput = document.getElementById("messageInput").value;
    document.getElementById("newOutputMsg").innerHTML += msgInput;
    
    document.addEventListener("keypress", (e) => {
        var key = e.key;

        if (key == "Enter") {
            document.getElementById("newOutputMsg").innerHTML += `<p id="newOutputMsg">${msgInput}</p>`;//adds each message to the msgBoard
            document.getElementById("messageInput").value = "";
        } else {
            msgInput = document.getElementById("messageInput").value;
        }

    });
                            

module.exports = messager;