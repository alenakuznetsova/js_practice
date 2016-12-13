function largestOfFour(arr) {
  var maxArrayEl = [];
  for(var i = 0; i < arr.length; i++){ 
    var maxElementArray = 0;
    for (var j = 0; j < arr[i].length; j++){
      if (arr[i][j] > maxElementArray){
          maxElementArray = arr[i][j];
      }
    }
    maxArrayEl.push(maxElementArray);
  }  
  return maxArrayEl;
}