var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password").value;

function genPassword() {
  var passwordLength = window.prompt("How many characters should your password include?");
  var capitals = window.confirm("Select OK to include capitals");
  var numbers = window.confirm("Select OK to include numbers");
  var specialCharacters = window.confirm("Select OK to include special characters");
  var chars = "qwertyuioplkjhgfdsazxcvbnm";
  password = "";

  // Set of capital characters if selected
  if (capitals) {var chars1 = "QWERTYUIOPASDFGHJKLZXCVBNM";} else {var chars1 = "";}

  // Set of numeric characters if selected
  if (numbers) {var chars2 = "1234567890"; } else {var chars2 = "";}

  // Set of special characters if selected
  if (specialCharacters) {var chars3 = "!@#$%^&*()";} else {var chars3 = "";}

  // Error if not at least one criteria is selected
  if (capitals == false && numbers == false && specialCharacters == false) {
    alert("ERROR: You must select at least one character type"); return;}

  // Creates string of included characters
  chars = (chars + chars1 + chars2 + chars3);

  // Generates password at random depending on chosen password length
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars[randomNumber];
  }

  // Gets and sets the password
  document.querySelector("#password").value = password;

  console.log("Password length: ");
  console.log(passwordLength);
  console.log("Include capital letters: ");
  console.log(capitals);
  console.log("Include numbers: ");
  console.log(numbers);
  console.log("Include special characters: ");
  console.log(specialCharacters);
  console.log("Included characters: ");
  console.log(chars);
  console.log("Your password is: ");
  console.log(password);
}

// Button creates event that runs the function
generateBtn.addEventListener("click", genPassword);

