window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    var fNameErr = "Please enter your first name";
    isTextPresent("first_name", fNameErr);
    var lNameErr = "Please enter your last name";
    isTextPresent("last_name", lNameErr);
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
function $(id) {
    return document.getElementById(id);
}
