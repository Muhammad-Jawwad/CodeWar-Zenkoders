function rot13(message){
  //your code here
  console.log(message)
  var str = "";
  for(let i in message){
    console.log(message[i])
    let a = message.charCodeAt(i)
    console.log("Before condition:",a)
    if (a<=90 && a>=65){
      a=a+13;
      if(a>=91){
        a = 64 + (a-90);
      }
    } else if(a<123 && a>96){
      a = a+13;
      if (a>122){
        a = 96 + (a-122);
      }
    } else{
      a = a
      console.log(a)
    }
    console.log(a)
    let b = String.fromCharCode(a);
    str += b
    console.log(str)
  }
  console.log(str)
  return str
}
