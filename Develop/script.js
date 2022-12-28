// Assignment Code
// Added global variables which include arrays for stoarage of generated characteres and all available characters to choose from
var generateBtn = document.querySelector("#generate");
var numberOfcharacters;
var okToUseLowercase;
var okToUseUppercase;
var okToUseNumbers;
var okToUseSpecialChars;
var specialChars = ["!","@","#","$","%","^","&","*","(",")","-","+","=","'",",",".","/",":",";","<",">","?","[","]","_","{","}","|"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var passwordArray = [];


function askQuestions(){
  var charLength = prompt("How many characters do you want?");
  numberOfCharacters = parseInt(charLength);
  okToUseLowercase = confirm("Do you want to use lowercase letters?");
  okToUseUppercase = confirm("Do you want to use uppercase letters?");
  okToUseNumbers = confirm("Do you want to use numbers?");
  okToUseSpecialChars = confirm("Do you want to use special characters?");
  
  // if number of characrters not in range??  
// if choices are this or that, use for loop to generate password based on selections
}

function generatePassword(){ 
  let finalPassword = "";
  askQuestions();
  if(okToUseLowercase == true){
    passwordArray = passwordArray.concat(lowerCase);
  }
  if(okToUseUppercase == true){
    passwordArray = passwordArray.concat(upperCase);
  }
  if(okToUseNumbers == true){
    passwordArray = passwordArray.concat(numbers);
  }
  if(okToUseSpecialChars == true){
    passwordArray = passwordArray.concat(specialChars);
  }

  for (i=0; i<numberOfCharacters; i++) {
    let random = Math.floor(Math.random()*passwordArray.length)
    finalPassword+=passwordArray[random];
  }
  return finalPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
