function confirmEnding(str, target) {
  var patternLength = target.length;
  var newString = str.substr(str.length-patternLength, patternLength);
  
  if (target == newString){
    return true;
  } else return false;
  
}