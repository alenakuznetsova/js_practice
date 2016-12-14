function chunkArrayInGroups(arr, size) {
    var newArray = [];
  var newArray2 = [];
  
  for (var i=0; i<=arr.length; i++ ) {        
    newArray2 = newArray.push(arr.splice(',', size)); 
  }
  if (arr.length !== 0) {
    newArray.push(arr);
  } else return newArray;
  
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);