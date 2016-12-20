function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);  
  return arr.filter(function (value) {
    return args.indexOf(value) === -1;
  });  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);