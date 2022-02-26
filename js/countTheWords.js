const testSentece =
  "Hello world, everything is fine in all the world. Hello again, best regards from the world, all is fine here";

function count(sentece = "") {
  const counters = new Map();
  const words = sentece.split(" ");
  words.forEach((word) => {
    const normalizedWord = word.toLowerCase().replace(/[^\w\s]/gi, "");
    const current = counters.get(normalizedWord);
    if (current !== undefined) counters.set(normalizedWord, current + 1);
    else counters.set(normalizedWord, 1);
  });
  return counters;
}

const result = [...count(testSentece).entries()];
result.forEach((value) => {
  console.log(`The word "${value[0]}" is present ${value[1]} times`);
});
