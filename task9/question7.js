function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Return index of target
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

const data = [29, 10, 14, 37, 13];
const target = 14;

const sortedData = selectionSort([...data]); // Sort a copy to keep original intact
console.log("Sorted Array:", sortedData);

const index = binarySearch(sortedData, target);
if (index !== -1) {
  console.log(`Element ${target} found at index ${index}`);
} else {
  console.log(`Element ${target} not found`);
}

// - Selection Sort: O(n^2) — because of nested loops.
// - Binary Search: O(log n) — because it halves the search space each step.
