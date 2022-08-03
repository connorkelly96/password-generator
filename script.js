// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var randomFunction = {
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
  var length = prompt("How Many Characters Would You Like Your Password To Have?");
  if ( length <8 || length >128 )
   { alert.prompt("please Enter a Number Between 8 and 128");
   
  }
  else {

  }

  var upper = window.confirm("Would You Like Your Password to Contain Uppercase Letters?")
  if (upper) {
    
  } else {
}

  var lower = window.confirm("Would You Like Your Password to Contain Lowercase Letters?")
  if (lower) {
  
  } else {

  }

  var number = window.confirm("Would You Like Your Password to Contain Numbers?")
  if (number) {
    
  } else {
    
  }

  var symbol = window.confirm("Would You Like Your Password to Contain Special Characters?")
  if (symbol) {
    
  } else {

  }

  var typesArray = [upper, lower, number, symbol];

  console.log(typesArray)

  var typesCount = upper + lower + number + symbol;

  console.log('typescount', typesCount)

  for(let i = 0; i < length; i += typesArray) {
    typesArray.forEach(type => {
      var functionName = Object.keys(type)[0]; 

      generatePassword() += randomFunction[functionName]();
    } );
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);