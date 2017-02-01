function fearNotLetter(str) {
  var arr = [];
	var missLetter;
	for(var i=0; i<str.length; i++){
		arr.push(str[i].charCodeAt());	
	}	

	for (var j=0; j<arr.length-1; j++){
		if(arr[j] !== arr[j+1]-1){
			missLetter = (arr[j+1]-1);
			return String.fromCharCode(missLetter);
		} else 
          console.log(undefined);
	}
}

fearNotLetter("abce");