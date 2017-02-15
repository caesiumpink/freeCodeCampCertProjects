/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { 
  // LBH QVQ VG!
  var arr = str.split('');
  var i;
  var charCodes = [];
  
  
  for (i = 0; i < arr.length; i++) {
    charCodes.push(arr[i].charCodeAt());
    if ( charCodes[i] >= 65 && charCodes[i] <= 77 ) {
      var t1 = charCodes[i] + 13;
      arr[i] = String.fromCharCode(t1);
    } else if ( charCodes[i] >= 78 && charCodes[i] <=90 ) {
      var t2 = charCodes[i] - 13;
      arr[i] = String.fromCharCode(t2);
     }
  }
  str = arr.join('');
  return str;
}