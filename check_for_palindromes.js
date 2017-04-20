// Check for Palindromes

// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note:
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
  var cleanString = "";
  for(var i=0; i<str.length; i++) {
    if(str[i].toLowerCase() != str[i].toUpperCase()){
      cleanString += str[i].toLowerCase();
    } else if(parseInt(str[i]) >= 0) {
      cleanString += str[i];
    }
  }
  for(var j=0; j<cleanString.length-1/2; j++) {
    if(cleanString[j] != cleanString[cleanString.length-1-j]) {
      return false;
    }
  }
  return true;
}

palindrome("eye");


// Tests
// palindrome("eye") should return a boolean.
// palindrome("eye") should return true.
// palindrome("_eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false.