const data = [
  { key: "name", value: "John" },
  { key: "email", value: "john@example.com" },
  { key: "age", value: 20 },
];
const allowedKeys = ["name", "age"];

function filterByAllowedKeys(data, allowedKeys) {
  return data.filter((item) => allowedKeys.includes(item.key));
}

const result = filterByAllowedKeys(data, allowedKeys);
console.log(result);
// Output: [ { key: 'name', value: 'John' }, { key: 'age', value: 20 } ]

//time complexity : O(n*m)
