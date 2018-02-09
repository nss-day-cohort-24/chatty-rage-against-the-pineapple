"use strict";

console.log("main js is in the house");


let dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed); // you could add animation here


// All about default message data

function dataRequestComplete(event) {
    console.log("messages are here");
    let defaultMsgs = JSON.parse(event.target.responseText);
    console.log("Default Messages: ", defaultMsgs);
    showData(defaultMsgs);
}

function showData(taco) {
    let defaultMsg = document.getElementById("defaultMsgDiv");
    let defaultMsgs = '';

    for(let item in taco) {
        let msgItem = taco[item];// change msgItem.color and value to items in messages.json

        defaultMsgs += `<div><h2>${msgItem.color}: ${msgItem.value}</h2></div>`;
    }

    defaultMsg.innerHTML = defaultMsgs;
    
}


function dataRequestFailed(event) {
    console.log("this data failed to load", event);
}

dataRequest.open("GET", "messages.json");
dataRequest.send();

//*/

let CryptonymBox = require("./cryptonym");
