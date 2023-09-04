function solution(number){
  console.log("number",number)
  var sum = 0
  if(number<= 0){
    return 0;
  }
  for(let i = 1; i < number ; i++){
    if(i%3 === 0 || i%5===0){
      sum += i;
    }
  }
  console.log(sum)
  return sum
}
