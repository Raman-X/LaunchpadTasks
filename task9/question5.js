function sameObject(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// Example usage:
const d1 = { name: "John", email: "john@example.com", age: 20 };
const d2 = { name: "John", email: "john@example.com", age: 20 };
const d3 = { name: "Jane", email: "jane@example.com", age: 20 };

console.log(sameObject(d1, d2)); // true
console.log(sameObject(d1, d3)); // false

//time complexity: O(n)
