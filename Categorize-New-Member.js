function openOrSenior(data){
  // ...
  var newData = []
  for( let i = 0 ; i < data.length ; i++){
    let age = data[i][0];
    let handicap = data[i][1];
    if(age >= 55 && handicap > 7){
      newData.push("Senior");
    } else{
      newData.push("Open");
    }
  }
  return newData
}
