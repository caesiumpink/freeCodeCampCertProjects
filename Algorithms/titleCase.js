/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  str = str.toLowerCase();
  var arr = str.split(' ');
  var i;
  
  for (i = 0; i < arr.length; i++) {
    var temp = arr[i].split('');
    var t = temp[0].toUpperCase();
    temp[0] = t;
    arr[i] = temp.join('');
  }
  
  str = arr.join(' ');
  return str;
}