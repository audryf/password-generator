// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var pool = [];


var criteria = function() {
  // User chooses which character types to include out of lowercase, uppercase, numbers, & symbols
  // Should each one of these be their own function?
  lower = window.confirm("Should your password contain any lowercase letters?");
  console.log(lower);
    if (lower) {
      window.confirm("Adding lowercase letters...");
      pool = pool.concat(lowerCase);
    } else {
      window.confirm("Got it, no lowercase letters.");
    };

  upper = window.confirm("Should your password contain any uppercase letters?");
  console.log(upper);
    if (upper) {
      window.confirm("Adding uppercase letters...");
      pool = pool.concat(upperCase);
    } else {
      window.confirm("Okay, no uppercase letters added.");
    };

  nums = window.confirm("Should your password contain any numbers?");
  console.log(nums);
    if (nums) {
      window.confirm("Adding numbers to the mix...");
      pool = pool.concat(numbers);
    } else {
      window.confirm("Alrighty, no numbers here.");
    };

  syms = window.confirm("Should your password contain any special characters?");
  console.log(syms);
    if (syms) {
      window.confirm("Mixing in some special characters...");
      pool = pool.concat(symbols);
    } else {
      window.confirm("Nothing special thrown in.");
    };
    
  if (lower === false && upper === false && nums === false && syms === false) {
    // If they do not choose anything, prompt user to select at least one choice
    window.alert("You must choose at least one criteria for a secure password! Please try again.");
    criteria();
  } else {
      window.confirm("Creating password...");
  }
  console.log(pool);
  
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