const data = [1, 3, 5, 2, 4, 5];

function findDuplicates(arr) {
  const counts = {};
  const duplicates = [];

  for (const num of arr) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  for (const num in counts) {
    if (counts[num] > 1) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}

const result = findDuplicates(data);
console.log(result); // Output: [5]

//time complexity O(n)
