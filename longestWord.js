function longestWord(sentence) {

  const mySent = sentence.replace(/[^a-zA-Z ]+/g, "");

  let result = ""


  for(const item of mySent.split(" ")){
  if(item.split("").length > result.split("").length){
    result = item
  }
  }
  return result;
}

longestWord("The quick red fox")
longestWord("Do Try This At Home.")
longestWord("Hello coding challenge.")
longestWord("This sentence... has commas, ellipses, and an exclamation point!")
longestWord("A tie? No way!")
longestWord("Wouldn't you like to know.")
