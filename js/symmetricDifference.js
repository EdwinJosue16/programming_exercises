function run(arr1 = [], arr2 = []) {
  const n1 = arr1.length;
  const n2 = arr2.length;
  let i = 0;
  let j = 0;
  let elementFrom1;
  let elementFrom2;
  const result = [];
  while (i < n1 && j < n2) {
    elementFrom1 = arr1[i];
    elementFrom2 = arr2[j];
    if (elementFrom1 > elementFrom2) {
      result.push(elementFrom2);
      ++j;
    } else if (elementFrom2 > elementFrom1) {
      result.push(elementFrom1);
      ++i;
    } else if (elementFrom1 === elementFrom2) {
      ++i;
      ++j;
    }
  }

  while (i < n1) {
    result.push(arr1[i]);
    ++i;
  }
  while (j < n2) {
    result.push(arr2[j]);
    ++j;
  }

  return result;
}

console.log(run([1, 2, 3, 6, 7, 9], [2, 3, 4, 7, 8, 11, 90, 70]));
