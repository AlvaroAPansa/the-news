//Full Name Validation
var fullName = document.getElementById('full-name');
fullName.addEventListener('blur', nameValidation);
var nameConfirm = false;
var name;
function nameValidation(e){
    name = e.target.value;
    var nameLength = name.length;
    var spaceIndex = name.indexOf(' ');//-1 when no space, 0 at the beginning
    if (nameLength > 6 && (spaceIndex != -1 && spaceIndex != 0 && spaceIndex != (nameLength-1))) {
        console.log('Name OK');
        nameConfirm = true;
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a correct name. Name and surname with a space in between.');
        errorField.appendChild(errorText);
        nameConfirm = false;
    }
}
//Email validation
var email = document.getElementById('email');
email.addEventListener('blur', emailValidation);
var emailConfirm = false;
var mailAddress;
function emailValidation(e){
    mailAddress = e.target.value;
    var atIndex = mailAddress.indexOf('@');//-1 when no space, 0 at the beginning
    var mailDomain = mailAddress.substring(atIndex+1);
    var domainLength = mailDomain.length;//At least 4 characters after the @
    var domainDotIndex = mailDomain.indexOf('.');//At least 1 charecter between the @ and the .
    var tldLength = domainLength - domainDotIndex;//Different top domain length allowed 3 (.co), 4 (.com), 7 (.com.ar)
    if (atIndex >= 1 && domainLength >= 4 && domainDotIndex >= 1 &&
        (tldLength === 3 || tldLength === 4 || tldLength === 7)) {
        console.log('email OK');
        emailConfirm = true;
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a correct email.');
        errorField.appendChild(errorText);
        emailConfirm = false;
    }
}
//Password validation
var password = document.getElementById('password');
password.addEventListener('blur', passwordValidation);
var passwordConfirm = false;
var passwordString;
function passwordValidation(e){
    passwordString = e.target.value;
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
        passwordConfirm = true;
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('The password must contain at least 8 characters only with letters and numbers.');
        errorField.appendChild(errorText);
        passwordConfirm = false;
    }
}
//Password confirmation
var repeatPassword = document.getElementById('repeat-password');
repeatPassword.addEventListener('blur', passwordConfirmation);
var passwordConfirmationConfirm = false;
var passwordConfirmationString;
function passwordConfirmation (e){
    passwordConfirmationString = e.target.value;
    passwordConfirmationLength = passwordConfirmationString.length;
    if (passwordConfirmationLength >= 8 && passwordConfirmationString === password.value){
        console.log('password confirmation OK');
        passwordConfirmationConfirm = true;
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Passwords do not match.');
        errorField.appendChild(errorText); 
        passwordConfirmationConfirm = false;
    }
}
//Age validation
var age = document.getElementById('age');
age.addEventListener('blur', ageValidation);
var ageConfirm = false;
var ageNumber;
function ageValidation (e){
    ageNumber = e.target.value;
    if (ageNumber >= 18 && (ageNumber % 1 === 0) && ageNumber <= 150) {
        console.log('age OK');
        ageConfirm = true;
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid age above 17.');
        errorField.appendChild(errorText);
        ageConfirm = false;
    }
}
//Phone validation
var phone = document.getElementById('phone');
phone.addEventListener('blur', phoneValidation);
var phoneConfirm = false;
var phoneNumber;
function phoneValidation (e){
    phoneNumber = e.target.value;
    var phoneLength = phoneNumber.length;
    var char;
    var othersConfirmation = false;//To check if the string has other characters
    for (let i = 0; (i < phoneLength && othersConfirmation === false) ; i++) {
        char = phoneNumber[i];
        if (!(char >= '0' && char <= '9')) {
            othersConfirmation = true;
        }
    }
    if (phoneLength >= 7 && othersConfirmation == false) {
        console.log('phone OK');
        phoneConfirm = true;
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid phone. Only numbers ( no (), - or spaces).');
        errorField.appendChild(errorText);
        phoneConfirm = false;
    }
}
//Address validation
var address = document.getElementById('address');
address.addEventListener('blur', addressValidation);
var addressConfirm = false;
var addressString;
function addressValidation(e){
    addressString = e.target.value;
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
        addressConfirm = true;
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid address. Street and number separed by a space.');
        errorField.appendChild(errorText);
        addressConfirm = false;
    }
}
//City validation (At least 3 characters with letters)
var city = document.getElementById('city');
city.addEventListener('blur', cityValidation);
var cityConfirm = false;
var cityString;
function cityValidation(e){
    cityString = e.target.value;
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
        cityConfirm = true;
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid city.');
        errorField.appendChild(errorText);
        cityConfirm = false;
    }
}
//Zip Code Validation (At least 3 characters with at least one number)
var zipCode = document.getElementById('zip-code');
zipCode.addEventListener('blur', zipCodeValidation);
var zipCodeConfirm = false;
var zipCodeString;
function zipCodeValidation(e){
    zipCodeString = e.target.value;
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
        zipCodeConfirm = true;
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid Zip Code.');
        errorField.appendChild(errorText);
        zipCodeConfirm = false;
    }
}
//Personal ID validation (Only numbers, 7 or 8 digits)
var personalId = document.getElementById('personal-id');
personalId.addEventListener('blur', personalIdValidation);
var personalIdConfirm = false;
var numberConfirmation = false;//To check if the string has a number
var othersConfirmation = false;//To check if the string has other characters
var char;
var personalIdString;
function personalIdValidation (e) {
    personalIdString = e.target.value;
    var personalIdLength = personalIdString.length;
    for (let i = 0; i < personalIdLength; i++) {
        char = personalIdString[i];
        if (char >= '0' && char <= '9') {
            numberConfirmation = true;
        } else {
            othersConfirmation = true;
        }
    }
    if ((personalIdLength === 7 || personalIdLength === 8) && numberConfirmation && !othersConfirmation){
        console.log('personal id OK');
        personalIdConfirm = true;
    } else {
        var errorField = e.target.nextElementSibling;
        var errorText = document.createTextNode('Insert a valid Personal ID.');
        errorField.appendChild(errorText);
        personalIdConfirm = false;
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
    errorField.removeChild(errorField.firstChild);
}
//Submit alert
var submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', submitAlert);
var errorName = 'Insert a correct name. Name and surname with a space in between.';
var errorEmail = 'Insert a correct email.';
var errorPassword = 'The password must contain at least 8 characters only with letters and numbers.';
var errorPasswordConfirmation = 'Passwords do not match.';
var errorAge = 'Insert a valid age above 17.';
var errorPhone = 'Insert a valid phone. Only numbers ( no (), - or spaces).';
var errorAddress = 'Insert a valid address. Street and number separed by a space.';
var errorCity = 'Insert a valid city.';
var errorZipCode = 'Insert a valid Zip Code.';
var errorPersonalId = 'Insert a valid Personal ID.';
var errorArray = [errorName, errorEmail, errorPassword, errorPasswordConfirmation, errorAge, errorPhone, errorAddress, 
    errorCity, errorZipCode, errorPersonalId];
function submitAlert (e){
    var confirmationArray = [nameConfirm, emailConfirm, passwordConfirm, passwordConfirmationConfirm, ageConfirm, 
        phoneConfirm, addressConfirm, cityConfirm, zipCodeConfirm, personalIdConfirm];
    var errorAlertString = 'Corect the following: ';
    if (nameConfirm && emailConfirm && passwordConfirm && passwordConfirmationConfirm && ageConfirm && phoneConfirm 
        && addressConfirm && cityConfirm && zipCodeConfirm && personalIdConfirm){
        alert('Name: '+name+'\nEmail: '+mailAddress+'\nAge: '+ageNumber+'\nPhone: '+phoneNumber+'\nAddress: '
        +addressString+'\nCity: '+cityString+'\nZip Code: '+zipCodeString+'\nPersonal ID: '+personalIdString);
    } else {
        for (let i = 0; i < confirmationArray.length; i++) {
            if (confirmationArray[i] === false) {
                errorAlertString += ('\n'+(i+1)+'- '+errorArray[i]);
            }
        }
        alert(errorAlertString);
    }
}
///Bonus. Hello user
fullName.addEventListener('keyup', nameGenerator);
function nameGenerator (e){
    document.getElementById('hello').innerHTML = '<h2>Hello '+e.target.value+'<h2>';
}