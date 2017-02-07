function translatePigLatin(str) {
  var arrVowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U"];
  
  var newArr = str.split("");

	if (arrVowels.indexOf(newArr[0]) >= 0) {
		 vowels(newArr);
	 } else { consonants(newArr); }

	function consonants(newArr) {
		for (var i=0; i<str.length; i++) {
			if (arrVowels.indexOf(newArr[0]) < 0) {
				 var pigWorld = newArr[0];
				newArr.shift();
				newArr.push(pigWorld);
		  } else break;
		}		
		newArr.push("ay");		
		return newArr;
	}

	function vowels(newArr) {
	  newArr.push("way");
		return newArr;
	}
	
  return newArr.join("");  
}

translatePigLatin("consonant");