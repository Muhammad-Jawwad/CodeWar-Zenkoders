function sortArray(array) {
  // Return a sorted array.
  for (let i = 0 ; i<array.length; i++){
    for(let j= i+1; j<array.length; j++){
      if(array[i] % 2 !== 0 && array[j] % 2 !== 0){
        console.log(array[i], array[j])
        if(array[i] > array[j]){
          let a = array[i];
          array[i] = array[j];
          array[j] = a;
        }
        console.log(array[i], array[j])
      }
    }
  }
  console.log(array)
  return array;
}
