// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordLength = window.prompt("Between 8 - 128 characters, how long should your password be?");
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  } else {
    //window.prompt();
    window.alert("Please choose a valid number.");
    generatePassword();
  }
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
