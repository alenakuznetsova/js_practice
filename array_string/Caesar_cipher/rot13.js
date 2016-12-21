function rot13(str) { // LBH QVQ VG!
  
  var cod3 = [];
  var cod4 = "";
  var codestr;
   
  for (var i=0; i < str.length; i++) {
       codestr = str.charCodeAt(i)+13;
    if (codestr < 77){
      codestr = codestr - 13;
      cod3.push(codestr);
    } else if (codestr > 90) {
      codestr = codestr - 26;
      cod3.push(codestr);
    } else cod3.push(codestr);
        
  }
  
   for (j = 0; j < cod3.length; j++) {
     cod4 += String.fromCharCode(cod3[j]);
    }
    return cod4; 
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");