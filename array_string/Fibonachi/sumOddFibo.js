function sumFibs(num) {
  var arrFac = [1, 1];
  var arrOddEl = [];
  var sumOddEl=0;
	
  for(var i=0; i<=num-2; i++) {
	arrFac.push(arrFac[i]+arrFac[i+1]);
  }
	
  for(var j=0; j<arrFac.length; j++) {
	if(arrFac[j]%2 > 0 && arrFac[j] <= num) {
		arrOddEl.push(arrFac[j]);
		sumOddEl += arrFac[j];
	}			
  }
	return sumOddEl;
}

sumFibs(4);