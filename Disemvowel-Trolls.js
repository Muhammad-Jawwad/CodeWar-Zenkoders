function disemvowel(str) {
  
  var newStr = "";
  var rejectStr;
  for(let i = 0 ; i < str.length ; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U"){
      rejectStr = str[i];
    } else {
      newStr = newStr + str[i];
    }
  }
  console.log(newStr);
  return newStr;
}
