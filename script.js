// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = 'abcdefghijklmnopqrstuvwxyz'
var number = '0123456789'
var symbol = '!@#$%^&*()'

function generatePassword() {


var typesArray = [];


  var passwordlength = prompt("How Many Characters Would You Like Your Password To Have?");
  if ( passwordlength <8 || passwordlength >128 ) {
     alert("please Enter a Number Between 8 and 128");
   
  }
  else {

  };

  var upperConfirm = window.confirm("Would You Like Your Password to Contain Uppercase Letters?")
  if (upperConfirm) {
    typesArray.push(upper)
  } else {
};

  var lowerConfirm = window.confirm("Would You Like Your Password to Contain Lowercase Letters?")
  if (lowerConfirm) {
  typesArray.push(lower)
  } else {

  };

  var numberConfirm = window.confirm("Would You Like Your Password to Contain Numbers?")
  if (numberConfirm) {
    typesArray.push(number)
  } else {
    
  };
                                               
  var symbolConfirm = window.confirm("Would You Like Your Password to Contain Special Characters?")
  if (symbolConfirm) {
    typesArray.push(symbol)
  } else {
    
  };

console.log(typesArray)

 
var answer = ''


  for(let i = 0; i <= passwordlength; i++) {
var randomNumber1 = Math.floor(Math.random() * typesArray.length);
 var randomItem = typesArray[randomNumber1]
 var randomNumber2 = Math.floor(Math.random() * randomItem.length);
 //console.log(randomItem[randomNumber2])
answer = answer + randomItem[randomNumber2]


  } 
  
  return answer;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);