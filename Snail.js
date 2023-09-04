snail = function(array) {
  // enjoy
  console.log("array",array)
  console.log("Length of an array", array.length);
  var newArray = []
  if(array[0][0] === undefined){
    return [];
  }
  else if(array[0].length===1){
    let a = newArray.push(array[0][0])
    return newArray
  }
  
  else{
    while(array.length>0){
      for (let i in array){
        let a = array[0][i]
        console.log("a",a)
        newArray.push(a)

      }
      array.shift()

      for (let i in array){
        console.log(i)
        console.log(array[i].length-1)

        let b = array[i][array[i].length-1]
        console.log("b",b)
        newArray.push(b)
        array[i].pop()
      }
    console.log("newArray",newArray)
    console.log("array",array)
      for(let i = array.length-1 ; i >= 0 ; i--){
        console.log("c",i)
        console.log("c",array.length-1)

        let b = array[array.length-1][i]
        console.log("b",b)
        newArray.push(b)
      }
      array.pop()
      console.log("newArray",newArray)
      console.log("array",array)

      for(let i = array.length-1 ; i >= 0 ; i--){
        let e = array[i][0];
        console.log("e",e)
        newArray.push(e);
        array[i].shift();
      }
      console.log("newArray",newArray)
      console.log("array",array)
}
//     for(let i in array[0]){
//       let d = array[0][i]
//       console.log("d",d)
//       newArray.push(d);
//     }
//     array.shift()
  }
  console.log("newArray",newArray)
  console.log("array",array)
  
  return newArray
}
