const BRACKETS_MAPPING = new Map().set("}", "{").set(")", "(").set("]", "[");
const TEST_BALANCED = "{[({()})]}";
const TEST_NOT_BALANCED = "{[({()})}";

function test(string) {
  if (areBalanced(string)) console.log("They are balanced");
  else console.log("They are not balanced");
}

function areBalanced(string) {
  let answer = false;
  const stack = [];
  let top = null;
  let rigthValue = null;
  for (const bracket of string) {
    if (["}", "]", ")"].includes(bracket)) {
      top = stack.shift();
      rigthValue = BRACKETS_MAPPING.get(bracket);
      if (top !== rigthValue) {
        answer = false;
        break;
      } else answer = true;
    } else {
      stack.unshift(bracket);
    }
  }
  return answer && stack.length === 0;
}

test(TEST_BALANCED);
