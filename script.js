// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()<>+-[]{}='
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

function generatePassword() {
  var numberOfChars = prompt("How Many Characters Would You Like Your Password To Have?");
  if ( number <8 || number >128 ) {
    prompt("Please Select a Number Between 8 and 128")
  };


  return 
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);