const numCalc = (num) => {
  if(num%3 === 0 && num%5 === 0) return "FizzBuzz"
  if(num%3 === 0) return "Fizz"
  if(num%5 === 0) return "Buzz"

  return num;
}

// console.log(numCalc(4))

function fizzBuzz(n) {
    const result = [];

    for(let i = 1;i<=n;i++){
      const ans = numCalc(i);

      result.push(ans);
    }

    console.log(result)
  return result;
}

fizzBuzz(2)
fizzBuzz(4)
fizzBuzz(8)
fizzBuzz(20)
fizzBuzz(50)
