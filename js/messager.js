"use strict";


var msgInput = document.getElementById("message-input").addEventListener("keypress", 13).value;
console.log("input message is: ", msgInput);



function myInput() {
    msgInput = document.getElementById("new-output-msg").innerHTML;
}

/*
var msgOutput = 
msgInput = document.getElementById("new-output-msg").innerHTML;


document.getElementById("demo").addEventListener("keypress", myInput);

function userMsg() {
    var x = document.getElementById("inputMsg").innerHTML;
    document.getElementById("outputMsg").innerHTML = x;
}

*/

//module.exports = messager;