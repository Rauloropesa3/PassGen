// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = ["'A','B','C','D','E',F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'"]
var lower = ["'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'"];
var upper = ["'A','B','C','D','E',F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'"];
var numBers= ["'1','2','3','4','5','6','7','8','9','0'"];
var symbols= ["'!','@','#','$','%','^','&','*','(',')','_','+'"];


// Write password to"" the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 function generatePassword (){
  var passLength = prompt("How many characters do you want your password to be?");
  var inLowCase = confirm("Will you include lowercase letters?");
  var inUpCase = confirm(" Will you include uppercase letters?");
  var inNum = confirm("Will you include numbers?");
  var inSpeChar = confirm("Will you include special characters?");

  var password = '';

 console.log(passLength);
 console.log(inLowCase);
 console.log(inUpCase);
 console.log(inNum);
 console.log(inSpeChar);
 

//  if uppercase numbers are confirmed
if (inNum === true && inLowcase === true){
  for (var i = 0; i< passLength; i++){
  
  charPick = numBers[Math.floor(Math.random()*numBers.length)];
  console.log(numBers);
  password = password.toString()+charPick.toString();
  password = password.toString()+charPick.toString();
  console.log(password)

  }
}
// if uppercase but no numbers
 else if(inNum != true && inLowCase === true){
  for (var i = 0; i <passLength; i++){
    
    charPick= characters[Math.floor(Math.random()*characters.length)];
    console.log(charPick)
    password = password.toString()+charPick.toString();
    console.log(password)  
  }
}
// numbers no uppercase
 else if(inNum != true && inLowCase != true){
      for (var i = 0; i <passLength; i++){

     charPick= symbols[Math.floor(Math.random()*symbols.length)];
     console.log(charPick)
     password = password.toString()+charPick.toString();
     console.log(password)  

      }
    }
  return password;
}
 

 