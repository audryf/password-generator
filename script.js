// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var sym = "!@#$%^&*()"

var criteria = function() {
  // User chooses which character types to include out of lowercase, uppercase, numbers, & symbols
  var lowerCase = window.confirm("Should your password contain any lowercase letters?");
  console.log(lowerCase);
  var upperCase = window.confirm("Should your password contain any uppercase letters?");
  console.log(upperCase);
  var numbers = window.confirm("Should your password contain any numbers?");
  console.log(numbers);
  var symbols = window.confirm("Should your password contain any special characters?");
  console.log(symbols);

  if (lowerCase === false && upperCase === false && numbers === false && symbols === false) {
    // If they do not choose anything, prompt user to select at least one choice
    window.alert("You must choose at least one criteria for a secure password! Please try again.");
    criteria();
  } else {
     window.confirm("You chose " +  + ".") 
  }
}

function generatePassword() {
  var passwordLength = window.prompt("Between 8 - 128 characters, how long should your password be?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lengthConfirm = window.confirm("Your password will be " + passwordLength + " characters long.");
    
    if (lengthConfirm) {
      console.log(passwordLength);
      criteria();
    } else {
      generatePassword();
    }
  } else {
    // If they choose less than 8 or more than 128
    window.alert("Please choose a valid number.");
    generatePassword();
    }
  }

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
