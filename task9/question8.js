class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Add data at the end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // Add data at the beginning
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // Remove data from the given index
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return null; // Invalid index
    }

    let removedNode = null;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      removedNode = current;
      previous.next = current.next;
    }

    this.length--;
    return removedNode.data;
  }

  // Add data at the given index
  insertAt(data, index) {
    if (index < 0 || index > this.length) {
      return false; // Invalid index
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    this.length++;
    return true;
  }

  // Returns the size of the list
  size() {
    return this.length;
  }

  // Checks if list is empty or not
  isEmpty() {
    return this.length === 0;
  }

  // Finds data from linked list, returns index or -1 if not found
  search(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1; // Not found
  }

  // Optional: Print list data for visualization
  printList() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}

const list = new SinglyLinkedList();

list.append(10);
list.append(20);
list.prepend(5);
list.insertAt(15, 2); // Insert 15 at index 2
list.printList(); // Output: 5 -> 10 -> 15 -> 20

console.log("Size:", list.size()); // 4
console.log("Is empty?", list.isEmpty()); // false

console.log("Index of 15:", list.search(15)); // 2
console.log("Removed at index 1:", list.removeAt(1)); // 10
list.printList(); // Output: 5 -> 15 -> 20

// Time Complexity of Operations:

// - append: O(n) (traverses to the end)
// - prepend: O(1)
// - removeAt: O(n) (traverses to index)
// - insertAt: O(n) (traverses to index)
// - size: O(1)
// - isEmpty: O(1)
// - search: O(n)
