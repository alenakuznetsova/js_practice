function myReplace(str, before, after) {
  var newStr;
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
	  newStr = str.replace(before, after.replace(after.charAt(0),after.charAt(0).toUpperCase()));
} else newStr = str.replace(before, after);

  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");