window.onload = function () {
    var h1 = document.querySelector("h1");
    h1.onclick = changeColor;
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    var msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing Form";
    msgHeading.setAttribute("class", "message");
    var h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);
    resetErrorMessages();
    var fNameErr = "Please enter your first name";
    isTextPresent("first_name", fNameErr);
    var lNameErr = "Please enter your last name";
    isTextPresent("last_name", lNameErr);
    checkValidDate();
}
function checkValidDate() {
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isvalidDate(dob)) {
        var errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "Use format mm/dd/yyyy";
    }
}
function isvalidDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
function isTextPresent(id, errMsg) {
    var txtBox = $(id);
    var userTxt = txtBox.value;
    if (userTxt == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
function resetErrorMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data_required")) {
            currSpan.innerHTML = "*";
        }
        else {
            currSpan.innerHTML = "";
        }
    }
}
function changeColor() {
    var element = this;
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);
    element.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
}
function $(id) {
    return document.getElementById(id);
}
