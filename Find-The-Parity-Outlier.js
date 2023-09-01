function findOutlier(integers){
  //your code here
  var even = 0;
  var odd = 0;
  for(let i in integers){
    if(integers[i]%2 === 0){
      even += 1;
    }
    else{
      odd += 1;
    }
  }
  if(even<odd){
    for(let i in integers){
      if(integers[i]%2 === 0){
        return integers[i];
      }
    }
  } else{
    for(let i in integers){
      if(integers[i]%2 === 0){
        let a = integers[i]
      }
      else{
        return integers[i];
      }
    }
  }
}
