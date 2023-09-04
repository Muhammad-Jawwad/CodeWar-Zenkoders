// complete the function
function solution(string) {
  console.log("str",string)
  var newStr = "";
  for(let i in string){
    let a = string.charCodeAt(i)
    
    if(a > 64 && a < 91){
      newStr += " " + string[i]
    }
    else{
      newStr += string[i];
    }
  }
  return (newStr)
}
