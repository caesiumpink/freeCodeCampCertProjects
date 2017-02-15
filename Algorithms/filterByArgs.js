/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function filterByArgs(arr) {
  // Remove all the values
  var filtered = arr;
  var i;
  
  function filterArray(query) {
    return filtered.filter(function(el) {
      return (el !== query);
    }); 
  }
  
  for (i = 1; i < arguments.length; i++) {
    filtered = filterArray(arguments[i]);
  }
  
  return filtered;
}