const products = [
  { id: 1, name: "Phone", categoryId: 2 },
  { id: 2, name: "Shirt", categoryId: 1 },
  { id: 3, name: "Charger", categoryId: 2 },
];

function groupByCategory(products) {
  return products.reduce((grouped, product) => {
    const key = product.categoryId;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(product);
    return grouped;
  }, {});
}

const groupedProducts = groupByCategory(products);
console.log(groupedProducts);
// Output:
// {
//   "1": [{ "id": 2, "name": "Shirt", "categoryId": 1 }],
//   "2": [
//     { "id": 1, "name": "Phone", "categoryId": 2 },
//     { "id": 3, "name": "Charger", "categoryId": 2 }
//   ]
// }

//time complexity: O(n)
