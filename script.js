// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var generatedPassword = ""
var  characters = []



var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArr = ["'A','B','C','D','E',F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'"];
var numBersArr= [1,2,3,4,5,6,7,8,9,0];
var symbolsArr= ["'!','@','#','$','%','^','&','*','(',')','_','+'"];

function generatePassword (){
  var passLength =parseInt(prompt("How many characters do you want your password to be?"))

  if (passLength <8 || passLength > 128 || isNaN(passLength)){
    alert(" Your password must be a number between 8 and 128")
    passLength =parseInt(prompt("How many characters do you want your password to be?"))

  }
  var inLowCase = confirm("Will you include lowercase letters?");
  var inUpCase = confirm(" Will you include uppercase letters?");
  var inNum = confirm("Will you include numbers?");
  var inSpeChar = confirm("Will you include special characters?");

if (inLowCase || inUpCase || inNum || inSpeChar){
  if (inLowCase){
    characters = characters.concat(lowerArr)
  }
if(inUpCase){
  characters = characters.concat(upperArr)
}
if(inNum){
  characters = characters.concat(numBersArr)
}
if(inSpeChar){
  characters = characters.concat(symbolsArr)
}
for (var index = 0; index < passLength; index++) {
  var randomChar = characters[Math.floor(Math.random()* characters.length)]
  generatedPassword = generatedPassword + randomChar
}
 
passwordText.textContent = generatedPassword
}
else {
  console.log("choose an option")
}

 }

generateBtn.addEventListener("click", generatePassword);






 