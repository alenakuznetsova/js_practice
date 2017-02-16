function findSumNum (num, el) {
	
	var newArr = [];		
	for (var i = 1; i <= num; i++) {
		newArr.push(i);
	}	
	
	var str = newArr.join("");
	
	var sum = 0;
	for (var j = 0; j < str.length; j++) {
		if (str[j] == el) {
			sum = sum + 1;
		}
	}
	console.log(sum);	
}

findSumNum (100, 1);