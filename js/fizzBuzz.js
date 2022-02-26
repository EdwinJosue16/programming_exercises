function fizzBuzz(limit) {
  let output = "";
  for (let n = 0; n <= limit; ++n) {
    if (n % 3 === 0) output += "Fizz";
    if (n % 5 === 0) output += "Buzz";
    if (!(n % 3 === 0 || n % 5 === 0)) output += n;
    output += "\n";
  }
  return output;
}

function commonFizzBuzz(limit) {
  let n = 0;
  let output = "";
  while (n < limit) {
    if (n % 5 === 0 && n % 3 === 0) output += "FizzBuzz";
    else if (n % 5 === 0) output += "Buzz";
    else if (n % 3 === 0) output += "Fizz";
    else output += n;
    output += "\n";
    ++n;
  }
  return output;
}

console.log(commonFizzBuzz(20));
