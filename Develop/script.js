var p1 = "How many characters long should your password be? Enter any number ranging from 8 to 128.";
var pLowerCase = "Do you need lowercase characters?";
var pUpperCase = "Do you need uppercase characters?";
var pNumber = "Do you need numeric characters?";
var pSpecCharacter = "Do you need special characters?";

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialCharacters = "!#%&()*+-$^|][{}].,_/:;<=>?@";

var password = "";

function writePassword() {  
    password = "";
    document.getElementById("password").value = "";
    var response1 = prompt(p1,);
    var characters = "";

    if (response1 > 128 || response1 < 8 || (Math.floor(response1) != response1)) { 
        alert("Response must be an integer between 8 and 128");
        var tryAgain = confirm("Would you like to try again?");
        if (tryAgain) {
        writePassword(); }
    }   var yesLowerCase = confirm(pLowerCase);
        var yesUpperCase = confirm(pUpperCase); 
        var yesNumber = confirm(pNumber); 
        var yesSpecial = confirm(pSpecCharacter);

    if (yesLowerCase === false && yesUpperCase === false && yesNumber === false && yesSpecial === false ) {
        alert("Response must include one character type.");
        var tryAgain = confirm("Would you like to try again?");
        if (tryAgain) {
        writePassword(); }
    }

    if (yesLowerCase) { 
        var characters = lower;
    } if (yesUpperCase) { 
        var characters = characters + upper;
    } if (yesNumber) { 
        var characters = characters + number;
    } if (yesSpecial) { 
        var characters = characters + specialCharacters;
    } 
    
    // function that pulls a random number of user criteria characters from the character string
    function createPassword() { 
    document.getElementById("password").value = "";
    password = "";
    for (var i = 0; i < response1; i++){
        password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
    } 
    
    //check if lowercase is include din the password
    function passwordIncludesLower (character) {
        return password.includes(character);
    } 
    var noLowerIncluded = !["a", "b", "c", "d", "e", "f", "g", "h", "v", "i", "j", "k", "l", 
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].some(passwordIncludesLower);

    //check if uppercase is include din the password
    function passwordIncludesUpper (character) {
        return password.includes(character);
    } 
    var noUpperIncluded = !["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z"].some(passwordIncludesUpper);

    //check if number is included in the password
    function passwordIncludesNumber (character) {
        return password.includes(character);
    } 
    var noNumberIncluded = !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].some(passwordIncludesNumber);
    // console.log(noNumberIncluded);

    //check if number is include din the password
    function passwordIncludesSpecial (character) {
        return password.includes(character);
    } 
    var noSpecialIncluded = !["!", "#", "%", "&", "(", ")", "*", "+", "-", "$", "^", "|", "]", "[", "{", "}", "]", 
    ".", ",", "_", "/", ":", ";", "<", "=", ">", "?", "@"].some(passwordIncludesSpecial);

    if (yesLowerCase && noLowerIncluded) { 
        console.log("Missing LOWER character, will retry.");
        createPassword(); 
    } else if (yesUpperCase && noUpperIncluded) {
            console.log("Missing UPPER character, will retry.");
            createPassword();
    } else if (yesNumber && noNumberIncluded) {
                console.log("Missing NUMBER character, will retry.");
                createPassword();
    } else if (yesSpecial && noSpecialIncluded) {
                    console.log("Missing SPECIAL character, will retry.");
                    createPassword();
    }
}
    
createPassword();

document.getElementById("password").value = password;

}




