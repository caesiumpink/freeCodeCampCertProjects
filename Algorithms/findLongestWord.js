/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  var reg = /[.,?!:;'"()]/g;
  var i;
  
  str = str.replace(reg, '');
  var arr = str.split(' ');
  var len = arr.length;
  str = arr[0];
  
  for (i = 1; i < len; i++) {
    if (arr[i].length > str.length) {
      str = arr[i];
    }
  }
  return str.length;
}
