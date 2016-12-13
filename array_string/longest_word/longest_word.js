function findLongestWord(str) {
  var delimiter = " ",
  arrayOfStrings = str.split(delimiter);
  var LongWord = 1;
  for (var i=0; i<arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > LongWord) {
      LongWord = arrayOfStrings[i].length;
    }
  }
  return LongWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");