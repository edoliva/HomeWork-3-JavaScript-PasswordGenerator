// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var p1 = "How many characters long should your password be? Enter any number ranging from 8 to 128.";
var pLowerCase = "Do you need lowercase characters?";
var pUpperCase = "Do you need uppercase characters?";
var pNumber = "Do you need numeric characters?";
var pSpecCharacter = "Do you need special characters?";

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var specialCharacters = "!#%&()*+-$^\|][{}].,_/:;<=>?@";
var allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#%&()*+-$^\|][{}].,_/:;<=>?@";




// var randomCharacterArray = allCharacters[Math.floor(Math.random() * allCharacters.length)];
// var randomCharactersALL = randomCharacterArray[Math.floor(Math.random() * randomCharacterArray.length)];

var password = "";
  
function writePassword() {  
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

    if (yesLowerCase) { 
        var characters = lower;
    } if (yesUpperCase) { 
        var characters = characters + upper;
    } if (yesNumber) { 
        var characters = characters + number;
    } if (yesSpecial) { 
        var characters = characters + specialCharacters;
    } 
    
    for (var i = 0; i < response1; i++){
        password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
        } document.getElementById("password").value = password;
}
