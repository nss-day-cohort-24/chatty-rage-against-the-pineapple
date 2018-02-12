"use strict";

function clearMessage() {
    document.getElementById("parentDiv").value = "";
    document.getElementsByClassName("newOutputMsg")[0].setAttribute("disabled", true);
}

module.exports = clearMessage;