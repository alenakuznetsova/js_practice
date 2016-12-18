function mutation(arr) {
  arr[0] = arr[0].toLowerCase();  
  arr[1] = arr[1].toLowerCase();
  
  var newArr = arr[1].split('', arr[1].lenght);
  
  var str;
  
  for(var i=0; i < arr[1].length; i++) {      
      str = arr[0].indexOf(newArr[i], 0);
    if (str < 0) {
      return false;
    }
  } return true;   
}

mutation(["hello", "hey"]);