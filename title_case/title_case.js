function titleCase(str) {
  var arrayOfStrings = str.toLowerCase().split(" ");
  var capitalLetter = [];
  
  for (var i = 0; i < arrayOfStrings.length; i++){    
    capitalLetter.push(arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].substr(1, str.length));    
  }
  
  var arraytitleCase = capitalLetter.join(" ");
  
  return arraytitleCase;
 }

titleCase("I'm a little tea pot");