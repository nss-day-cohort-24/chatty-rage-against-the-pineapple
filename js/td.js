function removeElement(parentDiv, childDiv) {
    if (childDiv == parentDiv) {
        alert("The parent should not be deleted..");
    }
    else if (document.getElementById(childDiv)) {
        var child = document.getElementById(childDiv);
        var parent = document.getElementById(parentDiv);
        parent.removeChild(child);
    }
    else {
        alert("Already deleted.");
        return false;
    }
}

// console.log("Hello");

// // function removeDummy () {
// //     var elem = document.getElementById("myDiv");
// //     elem.parentNode.removeChild(elem);   
// //     return false;
// // };

// var btn = document.getElementById('btn');
// console.log(btn);

// btn.onclick = function myButton() {
//     document.getElementById('txt').remove();
//     this.remove();
// };
