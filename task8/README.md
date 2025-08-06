#

# Calculate time complexity of following code snippets:

```javascript
function print() {
  console.log("Hello World");
}
```

## Answer: O(1)

```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

## Answer: O(n)

```javascript
function findX(arr) {
  let x = [];
  for (leti = 0; i < arr.length; i++) {
    for (letj = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 10) {
        x.push([arr[i], arr[j]]);
      }
    }
  }
  return x;
}
```

## Answer: O(n^2)

```javascript
function getFirstTwoElements(arr) {
  if (arr.length < 2) {
    return null;
  }
  const first = arr[0];
  const second = arr[1];
  return [first, second];
}
```

## Answer: O(1)

```javascript
function processTwoArrays(arr1, arr2) {
  let sum1 = 0;
  for (constitem of arr1) {
    sum1 += item;
  }
  let sum2 = 0;
  for (constitem of arr2) {
    sum2 += item;
  }
  return sum1 + sum2;
}
```

## Answer: O(n+m)

```javascript
function countF(n) {
  let count = 0;
  for (let i = 1; i < n; i = i * 2) {
    count++;
  }
  return count;
}
```

## Answer: O(log n)

#

#

#

# Find worst, average and best cases:

```javascript
function findElement(sortedArr, target) {
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

## Answer: Worst case: O(n), Average case: O(n), Best case: O(1)

```javascript
function recursiveSum(n) {
  if (n <= 0) {
    return 0;
  }
  return n + recursiveSum(n - 1);
}
```

## Answer: Worst case: O(n), Average case: O(n), Best case: O(1)

```javascript
function dFunction(arr) {
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return true;
    }
    seen[arr[i]] = true;
  }
  return false;
}
```

## Answer: Worst case: O(n), Average case: O(n), Best case: O(1)

```javascript
function repeatLog(arr) {
  for (let i = 0; i < arr.length; i++) {
    let repetitions = arr[i];
    for (let j = 0; j < repetitions; j++) {
      console.log("hello");
    }
  }
}
```

## Answer: Worst case: O(n^2), Average case: O(n), Best case: O(n)

#

#

#

# Implement a queue with the following operations:

- enqueue
- dequeue
- search

```javascript
class Queue {
  #data = [];
  constructor(data = []) {
    this.#data = data;
  }
  enqueue(item) {
    this.#data.push(item);
  }
  dequeue() {
    if (this.isEmpty()) return Error("Queue is empty");
    return this.#data.shift();
  }
  search(item) {
    return this.#data.indexOf(item);
  }
  isEmpty() {
    return this.#data.length === 0;
  }
  size() {
    return this.#data.length;
  }
  getData() {
    return this.#data;
  }
}

// Functional style
function Queue() {
  this.data = [];
  this.enqueue = (item) => {
    this.data.push(item);
  };
  this.dequeue = () => {
    if (this.data.length === 0) return Error("Queue is empty");
    return this.data.shift();
  };
  this.search = (item) => {
    return this.data.indexOf(item);
  };
  this.isEmpty = () => {
    return this.data.length === 0;
  };
  this.size = () => {
    return this.data.length;
  };
}
```
