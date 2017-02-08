/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/
function shiftString(arr, howMany) {
  // it doesn't always pay to be first
  var i;
  
  for (i = 0; i < howMany; i++) {
    arr.shift();
  }
  
  return arr;
}