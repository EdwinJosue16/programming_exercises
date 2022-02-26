function adder(value) {
  return (other) => other + value;
}

const addSix = adder(6);
console.log(addSix(5));
