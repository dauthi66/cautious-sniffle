window.onload = function() {
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main(): void {
    let fNameErr = "Please enter your first name";
    isTextPresent("first_name", fNameErr);

    let lNameErr = "Please enter your last name";
    isTextPresent("last_name", lNameErr);


}
/**
 * Returns true if the user enters text
 * @param id id of the text to validate
 * @param errMsg error message given to user
 * @returns 
 */
function isTextPresent(id: string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>$(id);
    let userTxt = txtBox.value;

    if (userTxt == "") {
        let errSpan = <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}

function $(id):HTMLElement {
    return document.getElementById(id);
}