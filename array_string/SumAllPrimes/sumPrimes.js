function sumPrimes(num) {
  var arr = [];
  var newArr =[];
 
  for (var j=0; j<=num; j++) {
	arr.push(j);
  }

 nextstep:
	for(var i=2; i < arr.length; i++) {
	  for (var k=2; k < i; k++) {
		if( i % k === 0) {
			continue nextstep;
		}
	  }
		newArr.push(arr[i]);		
	}
	
  var sum=0;
  for (var l=0; l<newArr.length; l++) {
	sum = sum + newArr[l];
  }    
  return sum;
}

sumPrimes(10);