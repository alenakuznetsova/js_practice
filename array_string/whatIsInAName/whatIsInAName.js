function whatIsInAName(collection, source) {
	var arr = [];		
	var counter = 0;
	var list;

for(var k in source) {
			counter = counter + 1;
}
  
	for (var i = 0; i < collection.length; i++) {
		list = 0;
		for(var key in source) {
				if (source[key] === collection[i][key]) {					
					list = list + 1;						
				} 
		}
		if (list == counter){
			arr.push(collection[i]);
		}
	}
	return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });