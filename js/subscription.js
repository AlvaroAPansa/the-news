var fullName = document.getElementById("full-name");
console.log(fullName);
fullName.addEventListener('blur', nameValidation);
function nameValidation(e){
    var name = e.target.value;
    //console.log(name);
    var nameLength = name.length;
    var spaceIndex = name.indexOf(' ');//-1 when no space, 0 at the beginning
    //console.log(spaceIndex);
    //console.log(nameLength);
    if (nameLength > 6 && (spaceIndex != -1 && spaceIndex != 0 && spaceIndex != (nameLength-1))) {
        console.log('OK');
    } else {
        console.log('Inserte un nombre correcto. Nombre y apellido separado por un espacio');
    }
}
