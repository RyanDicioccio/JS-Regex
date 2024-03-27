//Validation for Email
//access input and p tags from html file
let inputEmail = document.getElementById("email")
let emailVText = document.getElementById("pEmail")

//call function on keyup
inputEmail.addEventListener('keyup', validateEmail)

//check if email is valid and change colour of border to indicate if its done properly.
function validateEmail() {
    //give email the value of the text given and define the regex
    let email = this.value;
    let emailRegex = /^\S+@\S+\.\S+$/;

    if (emailRegex.test(email)) {
        inputEmail.style.borderWidth = "4px"
        inputEmail.style.borderColor = "Green"
        emailVText.textContent = ""
    } else {
        inputEmail.style.borderWidth = "4px"
        inputEmail.style.borderColor = "Red"
        emailVText.textContent = "Incorrect Email, Please Follow This Format: xyz@xyz.xyz"
        emailVText.style.color = "red"

    }
}

//Validation for Login
//access input and p tags from html file
let inputUser = document.getElementById("login")
let loginVText = document.getElementById("pUser")

//call function on keyup
inputUser.addEventListener('keyup', validateUser)

//check if user name is valid and change colour of border to indicate if its done properly.
function validateUser() {
    //Set user to be text given from user and turn to lowercase, and define the regex for validation.
    let user = this.value.toLowerCase();
    let userRegex = /^[a-zA-Z0-9]{2,20}$/;

    if (userRegex.test(user)) {
        inputUser.style.borderWidth = "4px"
        inputUser.style.borderColor = "Green"
        loginVText.textContent = ""
    } else {
        inputUser.style.borderWidth = "4px"
        inputUser.style.borderColor = "Red"
        loginVText.textContent = "Incorrect Username, Please Keep Your Name Between 2 And 20 Characters"
        loginVText.style.color = "red"

    }
}

//Validation for Pass
let inputPass = document.getElementById("pass")
let passVText = document.getElementById("pPass")
inputPass.addEventListener('keyup', validatePass)

function validatePass() {
    let pass = this.value;
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (passRegex.test(pass)) {
        inputPass.style.borderWidth = "4px"
        inputPass.style.borderColor = "Green"
        passVText.textContent = ""
    } else {
        inputPass.style.borderWidth = "4px"
        inputPass.style.borderColor = "Red"
        passVText.textContent = "Poor Password, Password Should Be At Least 6 Characters Long And Password Should Have At Least 1 Uppercase Letter And 1 Lowercase Letter"
        passVText.style.color = "red"

    }
}

//Validation for confrim password. 
let inputPass2 = document.getElementById("pass2")
let pass2VText = document.getElementById("pPass2")
inputPass2.addEventListener('keyup', validatePass2)

function validatePass2() {
    let pass2 = this.value;
    let pass1 = inputPass.value

    if (pass1 == pass2) {
        inputPass2.style.borderWidth = "4px"
        inputPass2.style.borderColor = "Green"
        pass2VText.textContent = ""
    } else {
        inputPass2.style.borderWidth = "4px"
        inputPass2.style.borderColor = "Red"
        pass2VText.textContent = "Password Does Not Match"
        pass2VText.style.color = "red"
    }


}
//access the checkbox from the html file
let inputMail = document.getElementById("newsletter")

//call the function to alert the user when checked
inputMail.addEventListener('click', checkedNewsletter)

//function to alert the user that they could get spam
function checkedNewsletter() {
    if (inputMail.checked) {
        alert("You May Receive Spam When Accepting Our Newsletter");
    }

}

//access the button from the html file
let signUpBtn = document.getElementById("SignBTN")

//call function when button is clicked to check if every feild is correct to sign in user. 
signUpBtn.addEventListener('click', signInButtonClick);

//function to check if the user can sign up.
function signInButtonClick(event) {


    //set all the regex one more time to allow a test in the if statement below.
    let emailRegex = /^\S+@\S+\.\S+$/;
    let userRegex = /^[a-zA-Z0-9]{2,20}$/;
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    //access the buttons and p tag from html file. 
    let termsBtn = document.getElementById("terms")
    let pTerms = document.getElementById("pTerms")

    //Alerts user that button is not clicked
    if (!termsBtn.checked) {
        pTerms.textContent = "Please Accept Our Terms And Conditions"
        pTerms.style.color = "red"

    }

    //only submit if all feilds are valid if not make sure it doesent submit and allows them to fix there errors.
    if (emailRegex.test(inputEmail.value) && userRegex.test(inputUser.value.toLowerCase())
        && passRegex.test(inputPass.value) && inputPass.value === inputPass2.value && termsBtn.checked) {

        alert("You Have Been Successfully Signed Up!")

    } else {
        alert("Please Fix Or Complete Your Inputs.")
        event.preventDefault();
    }

}

//access the button from the html file
let resetBtn = document.getElementById("ResetBTN")

resetBtn.addEventListener('click', resetPage)

function resetPage(){
    
    window.location.reload();
}

