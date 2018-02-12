"use strict";

function removeElement(parentDiv, childDiv) {
    if (childDiv == parentDiv) {
        console.log("The parent should not be deleted.");
    }
    else if (document.getElementById(childDiv)) {
        var child = document.getElementById(childDiv);
        var parent = document.getElementById(parentDiv);
        parent.removeChild(child);
    }
    else {
        console.log("Already deleted.");
        return false;
    }
}

// function removeElement() {
//     document.getElementById("newOutputMsg").innerHTML = "";
    
// }


// !!! WORKING CODE !!!

// function removeElement(parentDiv, childDiv) {
//     if (childDiv == parentDiv) {
//         console.log("The parent should not be deleted.");
//     }
//     else if (document.getElementById(childDiv)) {
//         var child = document.getElementById(childDiv);
//         var parent = document.getElementById(parentDiv);
//         parent.removeChild(child);
//     }
//     else {
//         console.log("Already deleted.");
//         return false;
//     }
// }

module.exports = removeElement;