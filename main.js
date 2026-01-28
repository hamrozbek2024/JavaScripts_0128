function mostFrequent(arr) {
  let count = {};
  let maxCount = 0;
  let result;

  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;

    if (count[item] > maxCount) {
      maxCount = count[item];
      result = item;
    }
  }

  return result;
}

console.log(mostFrequent([1, 3, 2, 3, 4, 3, 2])); // 3
