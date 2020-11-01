//Full Name Validation
var fullName = document.getElementById("full-name");
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
var email = document.getElementById("email");
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