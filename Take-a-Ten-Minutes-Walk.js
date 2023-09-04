function isValidWalk(walk) {
  //insert brilliant code here
  if(walk.length !== 10){
    return false
  }
  else{
    var y = 0
    var x = 0
    for(let i in walk){
      if(walk[i] === 'n'){
        y += 1
      }
      else if (walk[i] === 's'){
        y -= 1
      }
      else if (walk[i] === 'w'){
        x -= 1
      }
      else{
        x += 1
      }     
    }
    if(x === 0 && y === 0){
      return true
    }else{
      return false
    }
  }
}
