function validatePIN (pin) {
  
  if(pin.length === 4 || pin.length === 6){
    let code = ((/^[0-9]+$/).test(pin))
    return code
  } else{
    return false
  }
}
