// Assignment code here
window.alert("Select the criteria you want your new password to have");
var characterCount = window.prompt("How many charachters should your password include?");
var specialCharacters = window.confirm("Should your password include special characters?");
var capitals = window.confirm("Should your password include capitals?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
