// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

const randomFunction = {
lower: getRandomLower,
upper: getRandomUpper,
number: getRandomNumber,
symbol: getRandomSymbol
};

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
  if ( numberOfChars <8 || numberOfChars >128 )
   { alert("please Enter a Number Between 8 and 128");
  } else {

  }

  var hasUpper = window.confirm("Would You Like Your Password to Contain Uppercase Letters?")
  if (hasUpper) {
  } else {
}

  var hasLower = window.confirm("Would You Like Your Password to Contain Lowercase Letters?")
  if (hasLower) {

  } else {

  }

  var hasSymbols = window.confirm("Would You Like Your Password to Contain Special Characters?")
  if (hasSymbols) {

  } else {
    
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);