function sumAll(arr) {  
  var maxEl = Math.max.apply(null, arr); 
  var minEl = Math.min.apply(null, arr);
  var newArr = []; 
  
  for (var i = minEl; i<=maxEl; i++){
    newArr.push(i);
  }
  
  var sum = newArr.reduce(function(a, b) {
    return a + b;
  });
  console.log(sum);
}

sumAll([1, 4]);