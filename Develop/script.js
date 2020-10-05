// Assignment code here
var lowercaseArray = ["a","b","c"];
var uppercaseArray = ["A","B","C"];
var numericArray = [1,2,3];
var specialArray = ["$","&","!"]



var generatePassword = function() {
  // prompt for length
  var passLength = getPassLength();
  
  // prompt for character types
  var characterTypes = getCharacterType();

  // generate password
  var numRemaining = passLength;
  var numTypes = characterTypes.lc + characterTypes.up + characterTypes.n + characterTypes.s;

  var numLowercase = 0;
  var numUppercase = 0;
  var numNumeric = 0;
  var numSpecial = 0;
  var tempPass = [];

  // lowercase
  if (characterTypes.lc) {
    numLowercase = getNumOfCharacters(numRemaining,numTypes);
    console.log(numLowercase);

    numRemaining = numRemaining - numLowercase;
    numTypes = numTypes - 1;
  };
  // uppercase
  if (characterTypes.up) {
    numUppercase = getNumOfCharacters(numRemaining,numTypes);
    console.log(numUppercase);

    numRemaining = numRemaining - numUppercase;
    numTypes = numTypes - 1;
  };

  // numeric
  if (characterTypes.n) {
    numNumeric = getNumOfCharacters(numRemaining,numTypes);
    console.log(numNumeric);

    numRemaining = numRemaining - numNumeric;
    numTypes = numTypes - 1;
  };

  // special
  if (characterTypes.s) {
    numSpecial = getNumOfCharacters(numRemaining,numTypes);
    console.log(numSpecial);

    numRemaining = numRemaining - numSpecial;
    numTypes = numTypes - 1;
  };

  return shuffle(tempPass);
}

var getPassLength = function() {
  var length = window.prompt("What length would you like your password to be?");
  if (length < 8 || length > 128) {
    window.alert("You must select a length between 8 and 128.");
    getPassLength();
  } else {
    return length;
  };
};

var getCharacterType = function() {
  var lowercase = window.confirm("Do you want lowercase?");
  var uppercase = window.confirm("Do you want uppercase?");
  var numeric = window.confirm("Do you want numeric characters?");
  var special = window.confirm("Do you want special characters?");
  if (lowercase+uppercase+numeric+special === 0){
    window.prompt("You must select at least 1 character type.")
    var characterTypes = getCharacterType();
  } else {
    characterTypes = {lc: lowercase, up: uppercase, n: numeric, s: special};
    return characterTypes;
  };
};

var getNumOfCharacters = function(numRemaining,numTypes) {
  if (numTypes === 1) {
    return numRemaining;
  } else {
    var num = Math.floor(Math.random() * (numRemaining - numTypes+1));
    return Math.max(num,1);
  };
};

var getCharacters = function(arr,num) {

};

var shuffle = function(pass) {

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
