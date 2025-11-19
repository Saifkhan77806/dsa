function oneHundred(chars) {
  const len = chars.length;
  let runs = 100/len;

  const charArr = chars.split("")

  runs = Math.floor(runs) < runs ? Math.floor(runs) + 1 : runs

  const result = []

  for(let i = 0; i < runs ; i++){
    result.push(...charArr)
  }

  console.log(result.slice(0,100).join(""))
  return result.slice(0,100).join("");
}

oneHundred("One hundred ")
oneHundred("freeCodeCamp ")
oneHundred("daily challenges ")
oneHundred("!")

// 100 Characters
// Welcome to the 100th Daily Coding Challenge!

// Given a string, repeat its characters until the result is exactly 100 characters long. If your repetitions go over 100 characters, trim the extra so it's exactly 100.


// Tests Cases
// Waiting:1. oneHundred("One hundred ") should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ".
// Waiting:2. oneHundred("freeCodeCamp ") should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC".
// Waiting:3. oneHundred("daily challenges ") should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge".
// Waiting:4. oneHundred("!") should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".