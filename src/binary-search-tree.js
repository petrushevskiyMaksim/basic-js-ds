const { NotImplementedError } = require("../lib");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;

    while (true) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        return;
      }
    }
  }

  find(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  has(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  remove(/* data */) {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  min() {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }

  max() {
    // Remove line below and write your code here
    throw new NotImplementedError("Not implemented");
  }
}

module.exports = {
  BinarySearchTree,
};
