//Full Name Validation
var fullName = document.getElementById('full-name');
fullName.addEventListener('blur', nameValidation);
function nameValidation(e){
    var name = e.target.value;
    var nameLength = name.length;
    var spaceIndex = name.indexOf(' ');//-1 when no space, 0 at the beginning
    if (nameLength > 6 && (spaceIndex != -1 && spaceIndex != 0 && spaceIndex != (nameLength-1))) {
        console.log('Name OK');
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a correct name. Name and surname with a space in between.');
        errorField.appendChild(errorText);
    }
}
//Email validation
var email = document.getElementById('email');
email.addEventListener('blur', emailValidation);
function emailValidation(e){
    var mailAddress = e.target.value;
    var mailLength = mailAddress.length;
    var atIndex = mailAddress.indexOf('@');//-1 when no space, 0 at the beginning
    var mailDomain = mailAddress.substring(atIndex+1);
    var domainLength = mailDomain.length;//At least 4 characters after the @
    var domainDotIndex = mailDomain.indexOf('.');//At least 1 charecter between the @and the .
    var tldLength = domainLength - domainDotIndex;//Different top domain length allowed 3 (.co), 4 (.com), 7 (.com.ar)
    if (atIndex >= 1 && domainLength >= 4 && domainDotIndex >= 1 &&
        (tldLength === 3 || tldLength === 4 || tldLength === 7)) {
        console.log('email OK');
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a correct email.');
        errorField.appendChild(errorText);
    }
}
//Password validation
var password = document.getElementById('password');
password.addEventListener('blur', passwordValidation);
function passwordValidation(e){
    var passwordString = e.target.value;
    var passwordLength = passwordString.length;//At least 8
    var char;
    var letterConfirmation = false;//To check if the string has a letter
    var numberConfirmation = false;//To check if the string has a number
    var othersConfirmation = false;//To check if the string has other characters
    for (let i = 0; i < passwordLength; i++) {
        char = passwordString[i];
        if (char >= '0' && char <= '9') {
            numberConfirmation = true;
        } else if (char >= 'a' && char <= 'z') {
            letterConfirmation = true;
        } else if (char >= 'A' && char <= 'Z') {
            letterConfirmation = true;
        } else {
            othersConfirmation = true;
        }
    }
    if (passwordLength >= 8 && numberConfirmation && letterConfirmation && !othersConfirmation){
        console.log('password OK');
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('The password must contain at least 8 characters only with letters and numbers.');
        errorField.appendChild(errorText);
    }
}
//Password confirmation
var repeatPassword = document.getElementById('repeat-password');
repeatPassword.addEventListener('blur', passwordConfirmation);
function passwordConfirmation (e){
    if (e.target.value === password.value){
        console.log('password confirmation OK');
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Passwords do not match.');
        errorField.appendChild(errorText); 
    }
}
//Age confirmation
var age = document.getElementById('age');
age.addEventListener('blur', ageValidation);
function ageValidation (e){
    var ageNumber = e.target.value;
    if (ageNumber >= 18 && (ageNumber % 1 === 0) && ageNumber <= 150) {
        console.log('age OK');
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid age above 17.');
        errorField.appendChild(errorText); 
    }
}