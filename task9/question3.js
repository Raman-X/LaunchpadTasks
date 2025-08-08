const a1 = [1, 4, 2, 8, 9];
const a2 = [7, 5, 0, 4, 1];

function findCommonElements(arr1, arr2) {
  const elementsMap = {};
  const common = [];

  for (const num of arr1) {
    elementsMap[num] = true;
  }

  for (const num of arr2) {
    if (elementsMap[num]) {
      common.push(num);
      elementsMap[num] = false;
    }
  }

  return common;
}

const result = findCommonElements(a1, a2);
console.log(result); // Output: [1, 4]

//time complexity O(n+m)
