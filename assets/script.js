var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password").value;

function genPassword() {
  var passwordLength = window.prompt("How many characters should your password include?");
  var capitals = window.confirm("Can your password include capitals?");
  var numbers = window.confirm("Can your password include numbers?");
  var specialCharacters = window.confirm("Can your password include special characters?");
  var chars = "qwertyuioplkjhgfdsazxcvbnm";

  if (capitals) {var chars1 = "QWERTYUIOPASDFGHJKLZXCVBNM";} else {var chars1 = "";}

  if (numbers) {var chars2 = "1234567890"; } else {var chars2 = "";}

  if (specialCharacters) {var chars3 = "!@#$%^&*()";} else {var chars3 = "";}

  chars = (chars + chars1 + chars2 + chars3);

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

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

generateBtn.addEventListener("click", genPassword);

