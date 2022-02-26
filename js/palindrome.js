function formPalindrome(word1 = "", word2 = "") {
  const letters = (word1 + word2).split("");
  let start = 0;
  let final = letters.length - 1;
  let isPalidrome = true;
  while (start < final && isPalidrome) {
    isPalidrome = letters[start] === letters[final];
    ++start;
    --final;
  }
  return isPalidrome;
}

console.log(formPalindrome("Mary", "Army"));
console.log(formPalindrome("4321", "1234"));
