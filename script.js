var passwordBox = document.querySelector("#password");

// arrays of password options 
var lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialOptions = ["!", "@", "#", "%", "^","&", "*", "(", ")", "+", "-", "{", "}", ":"];

var promptMe = () => {
  var desiredLength = window.prompt('Enter desired length (between 8 - 128 characters'); 
  var lowerCase = window.prompt('Would you like to include lowercase letters? (yes or no)');
  var upperCase = window.prompt('Would you like to include uppercase letters? (yes or no)');
  var numeric = window.prompt('Would you like to include numbers? (yes or no)');
  var special = window.prompt('Would you like to include special characters? (yes or no)');

  var newOptions = []
  var newPassword = '';
  
  if(lowerCase == 'yes' ) {
    newOptions = newOptions.concat(lowercaseOptions);
  } 
  if(upperCase == 'yes') {
    newOptions = newOptions.concat(uppercaseOptions);
  }
  if(numeric == 'yes') {
    newOptions = newOptions.concat(numericOptions);
  }
  if(special == 'yes') {
    newOptions = newOptions.concat(specialOptions);
  }

  for (let i = 0; i < desiredLength; i++) {
    arrayLength = newOptions.length
    var randomNumber = Math.floor(Math.random() * arrayLength);
    var newPassword = newPassword + newOptions[randomNumber];
    passwordBox.textContent = newPassword;
  }
}
