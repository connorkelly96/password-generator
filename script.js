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

let generatedPassword = " ";
var typesArray = [];
var typesCount = 0;

  var length = prompt("How Many Characters Would You Like Your Password To Have?");
  if ( length <8 || length >128 )
   { alert.prompt("please Enter a Number Between 8 and 128");
   
  }
  else {

  };

  var upper = window.confirm("Would You Like Your Password to Contain Uppercase Letters?")
  if (upper) {
    typesArray.push(upper)
    typesCount++
  } else {
};

  var lower = window.confirm("Would You Like Your Password to Contain Lowercase Letters?")
  if (lower) {
  typesArray.push(lower)
  typesCount++
  } else {

  };

  var number = window.confirm("Would You Like Your Password to Contain Numbers?")
  if (number) {
    typesArray.push(number)
    typesCount++ 
  } else {
    
  };

  var symbol = window.confirm("Would You Like Your Password to Contain Special Characters?")
  if (symbol) {
    typesArray.push(symbol)
    typesCount++
  } else {

  };



  //console.log('typescount', typesCount)

  if (typesCount === 0) {
    return " ";
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
      var functionName = Object.keys(type)[0]; 
      console.log('randomFunction:', randomFunction)

      generatedPassword += randomFunction[functionName]();
      console.log(generatedPassword)
    } );
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);