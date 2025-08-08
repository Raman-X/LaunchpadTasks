# What is a Binary Search Tree (BST)?

> A Binary Search Tree (BST) is a special kind of binary tree where each node has at most two children, and it satisfies the following properties:

- The left subtree of a node contains only nodes with values less than the node’s value.
- The right subtree of a node contains only nodes with values greater than the node’s value.
- Both left and right subtrees are also binary search trees.
  This structure allows efficient searching, insertion, and deletion operations, typically in \(O(\log n)\) time on average, assuming the tree is balanced.

## Key Operations in BST:

- Insert: Add a new node while maintaining BST properties.
- Search: Find if a value exists in the tree.
- Traversal: Visit nodes in a specific order (in-order, pre-order, post-order).
- Delete: Remove a node and rearrange the tree to maintain BST properties.

## Implementation of BST in JavaScript:

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a new value
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      } else {
        // Duplicate values are not inserted in this BST
        break;
      }
    }
  }

  // Search for a value, returns true if found, else false
  search(data) {
    let current = this.root;

    while (current !== null) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  // In-order traversal (left, root, right)
  inorderTraversal(node = this.root, result = []) {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.data);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }

  // Find minimum value node starting from given node
  findMinNode(node = this.root) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Delete a node with given data
  delete(data, node = this.root, parent = null) {
    if (node === null) return;

    if (data < node.data) {
      this.delete(data, node.left, node);
    } else if (data > node.data) {
      this.delete(data, node.right, node);
    } else {
      // Node found

      // Case 1: Node with no children (leaf)
      if (node.left === null && node.right === null) {
        if (parent === null) {
          this.root = null; // Tree had only one node
        } else if (parent.left === node) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
      // Case 2: Node with one child
      else if (node.left === null || node.right === null) {
        const child = node.left !== null ? node.left : node.right;
        if (parent === null) {
          this.root = child;
        } else if (parent.left === node) {
          parent.left = child;
        } else {
          parent.right = child;
        }
      }
      // Case 3: Node with two children
      else {
        const minRight = this.findMinNode(node.right);
        const val = minRight.data;
        this.delete(val, this.root);
        node.data = val;
      }
    }
  }
}
```
