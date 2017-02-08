/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

function isPalindrome(str) {
  // Good luck!
  var reg = /\W|_/g;
  var arr;
  var revStr;
  
  str = str.replace(reg, '');
  str = str.toLowerCase();
  
  arr = str.split('');
  arr.reverse();
  
  revStr = arr.join('');
  
  if (revStr !== str) {
    return false;
  }
  
  return true;
}