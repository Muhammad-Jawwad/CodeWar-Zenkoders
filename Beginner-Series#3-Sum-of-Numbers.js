function getSum(a, b)
{
  var sum = 0
  if(a>b){
    let c = a;
    a = b
    b = c
  }
   //Good luck!
  for(let i = a ; i<= b; i++){
    sum += i;
  }
  console.log(sum)
  return sum
}
