// Getting HTML Element
let userInput = document.getElementById("password")
let eye = document.querySelector(".container .inputBox .fa-eye")
let eyeSlash = document.querySelector(".container .inputBox .fa-eye-slash")
// console.log(userInput.type); //password
let minLenght = document.getElementById("length")
let lowerCase = document.getElementById("lowercase")
let upperCase = document.getElementById("uppercase")
<<<<<<< HEAD
let numberCase = document.getElementById("number")
let specialCase = document.getElementById("speacial-character")
=======
let number = document.getElementById("number")
let specialCharcter = document.getElementById("speacial-character")
>>>>>>> 4c5a55dd7fed4de9baf518f637ac0702acc09407

// PassToggle
function passToggle() {
    if (userInput.type == "password") {
        userInput.type = "text";
        eye.style.display = "none";
        eyeSlash.style.display = "inline";
    } else {
        userInput.type = "password";
        eye.style.display = "inline";
        eyeSlash.style.display = "none";
    }
}



function checkPassword() {

    let value = userInput.value
    // console.log(value);

    //! Regex
    const passLength = new RegExp('(?=.{8,})')
    // console.log(passLength.test(value));
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
<<<<<<< HEAD
    const special = new RegExp('(?=.*[!@#$%^&*()_+{}|":;<>,.?/~`\\[\\]\\\\])');
=======
    const special = new RegExp('(?=.*[!@#$%^&*()])')
>>>>>>> 4c5a55dd7fed4de9baf518f637ac0702acc09407


    //! check pass
    if (passLength.test(value)) {
        // console.log(minLenght.firstChild.nextSibling);
        minLenght.firstChild.nextSibling.style.background = "blue"
        // console.log(minLenght.lastChild.previousSibling);
        minLenght.lastChild.previousSibling.style.color = "gray"
    } else {
        minLenght.firstChild.nextSibling.style.background = "gray"
        minLenght.lastChild.previousSibling.style.color = "black"
    }

    // Check lowerCase

    if (lower.test(value)) {
<<<<<<< HEAD
        // console.log(lowerCase.firstChild.nextSibling);
=======
>>>>>>> 4c5a55dd7fed4de9baf518f637ac0702acc09407
        lowerCase.firstChild.nextSibling.style.background = "blue"
        lowerCase.lastChild.previousSibling.style.color = "gray"
    } else {
        lowerCase.firstChild.nextSibling.style.background = "gray"
<<<<<<< HEAD
        lowerCase.lastChild.previousSibling.style.color = "black"
    }

    // Check upperCase

    if (upper.test(value)) {
        // console.log(upperCase.firstChild.nextSibling);
=======
        lowerCase.lastChild.previousSibling.style.color = "blue"
    }

    // Check upperCase
    if (upper.test(value)) {
>>>>>>> 4c5a55dd7fed4de9baf518f637ac0702acc09407
        upperCase.firstChild.nextSibling.style.background = "blue"
        upperCase.lastChild.previousSibling.style.color = "gray"
    } else {
        upperCase.firstChild.nextSibling.style.background = "gray"
<<<<<<< HEAD
        upperCase.lastChild.previousSibling.style.color = "black"
    }

    // Check number

    if (number.test(value)) {
        numberCase.firstChild.nextSibling.style.background = "blue"
        numberCase.lastChild.previousSibling.style.color = "gray"
    } else {
        numberCase.firstChild.nextSibling.style.background = "gray"
        numberCase.lastChild.previousSibling.style.color = "black"
    }

    // Check special character

    if (special.test(value)) {
        specialCase.firstChild.nextSibling.style.background = "blue"
        specialCase.lastChild.previousSibling.style.color = "gray"
    } else {
        console.log(specialCase);
        specialCase.firstChild.nextSibling.style.background = "gray"
        specialCase.lastChild.previousSibling.style.color = "black"
    }
=======
        upperCase.lastChild.previousSibling.style.color = "blue"
    }

>>>>>>> 4c5a55dd7fed4de9baf518f637ac0702acc09407

}

