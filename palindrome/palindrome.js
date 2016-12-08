function palindrome(str) {
  var strLen = str.toLowerCase().replace(/[^a-zA-ZА-Яа-яЁё0-9]/gi,'').replace(/\s+/gi,', ');
  console.log(strLen);  
  str = strLen;
  
    strLen = str.length;
    var result = '';
    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[strLen - 1 - i]) { //Сравниваем все элементы от начала строки со всеми элементами с конца строки
        result = true;
      } else {
        result = false;
        return result;
      }
    }
    return result;
}

palindrome("eye");
