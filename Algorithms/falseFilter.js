/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function falseFilter(arr) {
  // Don't show a false ID to this bouncer.
  var filtered = arr.filter(function callback(value) {
    return value;
  });
  
  return filtered;
}