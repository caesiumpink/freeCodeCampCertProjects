/*
Return an array consisting of the largest number from each provided sub-array. 
*/

function largestNum(arr) {
  // You can do this!
  var largest;
  var largeArr = [];
  var i;
  var j;
  
  for (i = 0; i < arr.length; i++) {
    largest = 0;
    
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    
    largeArr.push(largest);
  }
  
  return largeArr;
}