// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];



function generatePasswordOptions() {
  var passwordLength = window.prompt("Between 8 - 128 characters, how long should your password be?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lengthConfirm = window.confirm("Your password will be " + passwordLength + " characters long.");

    if (lengthConfirm) {
      console.log(passwordLength);
      var lower = window.confirm("Should your password contain any lowercase letters?");
      console.log(lower);
      if (lower) {
        window.confirm("Adding lowercase letters...");
      } else {
        window.confirm("Got it, no lowercase letters.");
      };

      var upper = window.confirm("Should your password contain any uppercase letters?");
      console.log(upper);
      if (upper) {
        window.confirm("Adding uppercase letters...");
      } else {
        window.confirm("Okay, no uppercase letters added.");
      };

      var nums = window.confirm("Should your password contain any numbers?");
      console.log(nums);
      if (nums) {
        window.confirm("Adding numbers to the mix...");
      } else {
        window.confirm("Alrighty, no numbers here.");
      };

      var syms = window.confirm("Should your password contain any special characters?");
      console.log(syms);
      if (syms) {
        window.confirm("Mixing in some special characters...");
      } else {
        window.confirm("Nothing special thrown in.");
      };

      if (lower === false && upper === false && nums === false && syms === false) {
        // If they do not choose anything, prompt user to select at least one choice
        window.alert("You must choose at least one criteria for a secure password! Please try again.");
        generatePasswordOptions();
      } else {
        window.confirm("Creating password...");

        var passOptions = {
          length: passwordLength,
          containLower: lower,
          containUpper: upper,
          containNum: nums,
          containSym: syms
        }
      }

      return passOptions

    } else {
      generatePasswordOptions();
    }
  } else {
    // If they choose less than 8 or more than 128
    window.alert("Please choose a valid number.");
    generatePasswordOptions();
  }
}

function generatePassword(){
  var criteria = generatePasswordOptions( )
  console.log(criteria)

  var pool = [];
  var passwordChar = [];

  if (criteria.containLower){
      pool = pool.concat(lowerCase)
  }
  if (criteria.containUpper){
      pool = pool.concat(upperCase)
  }
  if (criteria.containNum){
      pool = pool.concat(numbers)
  }
  if (criteria.containSym){
      pool = pool.concat(symbols)
  }

  console.log(pool);

  for (var i = 0; i < criteria.length; i++) {
      var randomNum = Math.floor(Math.random() * pool.length)
      // console.log(randomNum);
      // console.log(pool[randomNum]);
      passwordChar = passwordChar.concat(pool[randomNum]);
      console.log(passwordChar);
  }
  
  alert("Your password is " + passwordChar.join(""));

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);