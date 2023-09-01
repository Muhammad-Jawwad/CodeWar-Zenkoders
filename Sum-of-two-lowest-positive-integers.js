function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let ascendingOrder = numbers . sort((a,b)=>a-b)
  let sum = ascendingOrder[0]+ascendingOrder[1];
  console.log(sum);
  return sum;
}
