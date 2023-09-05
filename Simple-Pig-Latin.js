function pigIt(str){
  //Code here
  var newStr = ""
  let arr = str.split(" ");
  console.log(arr)
  for(let i in arr){
    let a = arr[i].substring(0,1);
    let b = arr[i].slice(1);
    a += 'ay'
//     console.log(a);
    b+=a
    console.log(b)
    newStr += b
    if (i < arr.length-1){
      newStr += " "
    }
  }
  console.log(newStr)
  return newStr
}
