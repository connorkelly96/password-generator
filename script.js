// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

var upper = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'
var lower = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'
var number = '0,1,2,3,4,5,6,7,8,9'
var symbol = '!,@,#,$,%,^,&,*,(,)'

function generatePassword() {


var typesArray = [];


  var passwordlength = prompt("How Many Characters Would You Like Your Password To Have?");
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

  for(let i = 0; i <= passwordlength; i++) {
var randomNumber = Math.floor(Math.random() * typesArray.length);
  password = typesArray.substring(randomNumber, randomNumber + 1);
  } 
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);