"use strict";

function backgroundColor(color) {
    document.body.style.background = color;
 }

function fontSize(font) {
    document.body.style.fontSize = font;
}

function clearMessage() {
    document.getElementById("messageInput").value = "";
}

 module.exports = {backgroundColor, fontSize, clearMessage};