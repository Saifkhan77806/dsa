function isValidMessage(message, validator) {
  const spMsg = message.toLowerCase().split(" ")

  const spVal = validator.toLowerCase().split("")

  if(spMsg.length !== spVal.length) return false

  for(let i=0; i<spVal.length;i++){
  if(spMsg[i][0] == spVal[i]) return true
  }


  return false;
}

console.log(
isValidMessage("hello world", "hw")
)
console.log( 
isValidMessage("ALL CAPITAL LETTERS", "acl")
)
console.log( 
isValidMessage("Coding challenge are boring.", "cca")
)
console.log( 
isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD")
)
console.log(
isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") 
)
