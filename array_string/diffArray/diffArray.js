function diffArray(arr1, arr2) {
  var newArr = [];
  var newArr1 = [];
  var newArr2 = [];
  
  
  for(var i = 0; i <= arr2.length-1; i++){    
      if (arr1.indexOf(arr2[i]) <0 ){
        newArr1.push(arr2[i]);
      } 
    }
  console.log(newArr1);
  
  for (var j = 0; j <= arr1.length-1; j++){    
    if (arr2.indexOf(arr1[j]) == -1 ){
      newArr2.push(arr1[j]);
    }
  }
  console.log(newArr2);
  
  newArr = newArr1.concat(newArr2);
  
     return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);