function getIndexToIns(arr, num) {
  arr.push(num);
  
  function sortArr (a, b){
    return a - b;     
  }
  
  arr.sort(sortArr);
  
  var index = arr.indexOf(num);
  return index;
}

getIndexToIns([40, 60], 50);