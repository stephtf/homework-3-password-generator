// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialOptions = ["!", "@", "#", "%", "^","&", "*", "(", ")", "+", "-", "{", "}", ":"];



// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



  // I created these "if" statements, which will determine what goes inside the emptybasket, based on what the user selects:

function generatePassword() {
  var desiredLength = window.prompt ("Enter desired length (between 8 - 128 characters)");
  var lowercase = window.confirm ("Would you like to include lowercase?");
  var uppercase = window.confirm ("Would you like to include uppercase?");
  var numeric = window.confirm ("Would you like to include numeric?");
  var special = window.confirm ("Would you like to include special characters?");

  var emptyBasket = [ ];

  if (lowercase === true) {
    emptyBasket = lowercaseOptions + emptyBasket 
  } 

  if (uppercase === true) {
    emptyBasket = uppercaseOptions + emptyBasket 
  }

  if (numeric === true) {
    emptyBasket = numericOptions + emptyBasket 
  }

  if (special === true) {
    emptyBasket = specialOptions + emptyBasket
  }


  // here's my "for" loop that selects characters randomly from my emptybasket:

  for (var i = 0; i < desiredLength; i++) {
    var randomNumb = Math.floor(Math.random() * emptyBasket.length);

    randomChar = emptyBasket[randomNumb];

    password = password + randomChar;
  }

 return password
}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
