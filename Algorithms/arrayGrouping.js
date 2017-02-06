/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.*/

function arrayGrouping(arr, size) {
  // Break it up.
  var remaining = arr.length;
  var groupedArr = [];
  var tempArr;
  var i = 0;
  var j;
  
     
      while (i < arr.length && remaining >= size) {
        tempArr = [];
        for (j = 0; j < size; j++) {
          tempArr.push(arr[j+i]);
        }
        groupedArr.push(tempArr);
        remaining -= size;
        i+=size;
      }
      
  
  if (remaining > 0) {
    tempArr = [];
    for (i = 0; i < remaining; i++) {      
      tempArr.push(arr[i + (arr.length-remaining)]);
    }
    
    groupedArr.push(tempArr);
  }
  
  arr = groupedArr;
  return arr;
}