window.onload = function() {
    //change heading color on click
    let h1 = document.querySelector("h1");
    h1.onclick = changeColor;

    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main(): void {
    //create an H2 and place it
    //creates an H2
    let msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing Form";
    //sets attribute class="message"
    msgHeading.setAttribute("class", "message")
    let h1 = document.querySelector("h1");
    //places H2 "afterend", after the element (sibling)
    h1.insertAdjacentElement("afterend", msgHeading);

    resetErrorMessages();

    //validate first and last name
    let fNameErr = "Please enter your first name";
    isTextPresent("first_name", fNameErr);

    let lNameErr = "Please enter your last name";
    isTextPresent("last_name", lNameErr);

    //validate date
    checkValidDate();
}

function checkValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;

    if (!isvalidDate(dob)) {

        let errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "Use format mm/dd/yyyy";
    }
}

function isvalidDate(input: string):boolean{
    //validates mm/dd/yyyy and m/d/yyyy
    //REGULAR EXPRESSION starts with carrot, $ sign means find only one time
    //set a pattert, begins and ends with /, g makes it look for the pattern throughout the string
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    //returns as boolean
    return pattern.test(input);

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

/**
 * resets all the spans back to default text
 */
function resetErrorMessages():void {
    let allSpans = document.querySelectorAll("form span");
    for (let i = 0; i < allSpans.length; i++) {
        let currSpan = <HTMLElement>allSpans[i];

        if (currSpan.hasAttribute("data_required")) {
            currSpan.innerHTML = "*";
        }
        else {
            currSpan.innerHTML = "";
        }
    }

}

/**
 * changes an elements color on click
 */
function changeColor() {
    let element = <HTMLElement>this;
    //math.floor to round down from decimal, random number 1 - 255 
    let red = Math.floor(Math.random() * 255 + 1)
    let green = Math.floor(Math.random() * 255 + 1)
    let blue = Math.floor(Math.random() * 255 + 1)
    element.style.color = `rgb(${red}, ${green}, ${blue})`
}   

function $(id):HTMLElement {
    return document.getElementById(id);
}