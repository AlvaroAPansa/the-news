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
//Age validation
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
//Phone validation
var phone = document.getElementById('phone');
phone.addEventListener('blur', phoneValidation);
function phoneValidation (e){
    var phoneNumber = e.target.value;
    var phoneLength = phoneNumber.length;
    var char;
    var othersConfirmation = false;//To check if the string has other characters
    for (let i = 0; (i < phoneLength && othersConfirmation === false) ; i++) {
        char = phoneNumber[i];
        console.log(!(char >= '0' && char <= '9'));
        if (!(char >= '0' && char <= '9')) {
            othersConfirmation = true;
        }
    }
    if (phoneLength >= 7 && othersConfirmation == false) {
        console.log('phone OK');
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid phone. Only numbers ( no (), - or spaces).');
        errorField.appendChild(errorText); 
    }
}
//Address validation
var address = document.getElementById('address');
address.addEventListener('blur', addressValidation);
function addressValidation(e){
    var addressString = e.target.value;
    var addressLength = addressString.length;//At least 5
    var spaceIndex = addressString.indexOf(' ');
    var char;
    var letterConfirmation = false;//To check if the string has a letter
    var numberConfirmation = false;//To check if the string has a number
    for (let i = 0; i < addressLength; i++) {
        char = addressString[i];
        if (char >= '0' && char <= '9') {
            numberConfirmation = true;
        } else if (char >= 'a' && char <= 'z') {
            letterConfirmation = true;
        } else if (char >= 'A' && char <= 'Z') {
            letterConfirmation = true;
        }
    }
    if (addressLength >= 5 && (spaceIndex >0 && spaceIndex < addressLength-1) && letterConfirmation && numberConfirmation){
        console.log('address OK');
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid address. Street and number separed by a space.');
        errorField.appendChild(errorText);
    }
}
//City validation (At least 3 characters with letters)
var city = document.getElementById('city');
city.addEventListener('blur', cityValidation);
function cityValidation(e){
    var cityString = e.target.value;
    var cityLength = cityString.length;//At least 3
    var letterConfirmation = false;
    var char;
    for (let i = 0; i < cityLength; i++) {
        char = cityString[i];
        if (char >= 'a' && char <= 'z') {
            letterConfirmation = true;
        } else if (char >= 'A' && char <= 'Z') {
            letterConfirmation = true;
        }
    }
    if (cityLength >= 3 && letterConfirmation){
        console.log('city OK');
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid city.');
        errorField.appendChild(errorText);
    }
}
//Zip Code Validation (At least 3 characters with at least one number)
var zipCode = document.getElementById('zip-code');
zipCode.addEventListener('blur', zipCodeValidation);
function zipCodeValidation(e){
    var zipCodeString = e.target.value;
    var zipCodeLength = zipCodeString.length;//At least 3
    var numberConfirmation = false;//To check if the string has a number
    for (let i = 0; i < zipCodeLength; i++) {
        char = zipCodeString[i];
        if (char >= '0' && char <= '9') {
            numberConfirmation = true;
        }
    }
    if (zipCodeLength >= 3 && numberConfirmation){
        console.log('zip code OK');
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid Zip Code.');
        errorField.appendChild(errorText);
    }
}
//Personal ID validation (Only numbers, 7 or 8 digits)
var personalId = document.getElementById('personal-id');
personalId.addEventListener('blur', personalIdValidation);
var numberConfirmation = false;//To check if the string has a number
var othersConfirmation = false;//To check if the string has other characters
var char;
function personalIdValidation (e) {
    var personalIdString = e.target.value;
    var personalIdLength = personalIdString.length;
    for (let i = 0; i < personalIdLength; i++) {
        char = personalIdString[i];
        if (char >= '0' && char <= '9') {
            numberConfirmation = true;
        } else {
            othersConfirmation = true;
        }
    }
    console.log(personalIdLength);
    console.log(personalIdLength === 7);
    if ((personalIdLength === 7 || personalIdLength === 8) && numberConfirmation && !othersConfirmation){
        console.log('personal id OK');
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid Personal ID.');
        errorField.appendChild(errorText);
    }
}
//Focus event to eliminate error message
fullName.addEventListener('focus', eliminateError);
email.addEventListener('focus', eliminateError);
password.addEventListener('focus', eliminateError);
repeatPassword.addEventListener('focus', eliminateError);
age.addEventListener('focus', eliminateError);
phone.addEventListener('focus', eliminateError);
address.addEventListener('focus', eliminateError);
city.addEventListener('focus', eliminateError);
zipCode.addEventListener('focus', eliminateError);
personalId.addEventListener('focus', eliminateError);
function eliminateError (e){
    var errorField = e.target.nextElementSibling;
    //console.log(errorField);
    errorField.removeChild(errorField.firstChild);
    //errorField.removeChild(errorText);
}