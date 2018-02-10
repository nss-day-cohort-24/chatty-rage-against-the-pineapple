"use strict";

console.log("main js is in the house");


let dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed); 


// All about default message data

function dataRequestComplete(event) {
    console.log("messages are here", event.target.responseText);
    if(event.target.status === 200) {
    let defaultMsgs = JSON.parse(event.target.responseText);
    console.log("Default Messages: ", defaultMsgs);
    showData(defaultMsgs);
    } else {
        console.log("check the spelling of your file");
    }
}

function showData(taco) {
    let defaultMsgDiv = document.getElementById("defaultMsgDiv");
    let defaultMsgs = '';

    for(let item in taco) {
        let msgItem = taco[item];
        // change msgItem.color and value to items in messages.json

        defaultMsgs += `<div><p>${msgItem.message}</p></div>`;
    }

    defaultMsgDiv.innerHTML = defaultMsgs;
    
}


function dataRequestFailed(event) {
    console.log("these messages failed to load", event);
}

dataRequest.open("GET", "messages.json");
dataRequest.send();

// add the correct function names.
module.exports = {dataRequestComplete, showData, dataRequestFailed};