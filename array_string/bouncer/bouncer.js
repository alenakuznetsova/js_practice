function bouncer(arr) { 
  var filteredArray = arr.filter(function(item){
                                 return Boolean(item);
                                 });
  return filteredArray;
}

bouncer([7, "ate", "", false, 9]);