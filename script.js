// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var symbols = "!@#$%^&*()"

var criteria = function() {
  // User chooses which character types to include out of lowercase, uppercase, numbers, & symbols
  lowerCase = window.confirm("Should your password contain any lowercase letters?");
  console.log(lowerCase);
    if (lowerCase) {
      window.confirm("Adding lowercase letters...");
    } else {
      window.confirm("Got it, no lowercase letters.");
    };
  upperCase = window.confirm("Should your password contain any uppercase letters?");
  console.log(upperCase);
    if (upperCase) {
      window.confirm("Adding uppercase letters...");
    } else {
      window.confirm("Okay, no uppercase letters added.");
    };

  numbers = window.confirm("Should your password contain any numbers?");
  console.log(numbers);
    if (numbers) {
      window.confirm("Adding numbers to the mix...");
    } else {
      window.confirm("Alrighty, no numbers here.");
    };

  symbols = window.confirm("Should your password contain any special characters?");
  console.log(symbols);
    if (symbols) {
      window.confirm("Mixing in some special characters...");
    } else {
      window.confirm("Nothing special thrown in.");
    };
    
  if (lowerCase === false && upperCase === false && numbers === false && symbols === false) {
    // If they do not choose anything, prompt user to select at least one choice
    window.alert("You must choose at least one criteria for a secure password! Please try again.");
    criteria();
  } else {
      window.confirm("Creating password...");
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

  // Math.random()
  // For loop to tie the randomness to selectors?
  // HOW DO I GET THE ANSWERS FROM THE CRITERIA PROMPTS TO BE USED IN THE PASSWORD?



}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);