/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatString(str, num) {
  // repeat after me
  
  if (num > 0) {
    var initialStr = str;
    
    for (var i = 1; i < num; i++) {
      str += initialStr;
    }
    
  } else {
    str = '';
  }
  return str;
}