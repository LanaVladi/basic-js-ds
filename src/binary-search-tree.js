const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {

   root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.root = null;
    return this.root;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  //  if (this.root === null) {
  //   this.root = new this.root(data);
  //   return new this.root(data);
  //  }

    this.root = addWithin(this.root, data);

    function addWithin (node, data) {
    if (!node) {
     return new Node (data);
    }

    if (node.data === data) {
      return node;
    }

    if (data < node.data) {
      node.left = addWithin(node.left, data);
    } else {
      node.right = addWithin(node.right, data);
    }
    return node;
   }
  }


  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
// return searchWithin (this.root, data);
// function searchWithin (this.root, data) {
// if (!this.root) {
//   return false;
// }
// if (this.root.data === data) {
//   return true;
// }
// return (data < this.root.data) ?
// searchWithin (this.root.left, data) :
// searchWithin (this.root.right, data);
// }
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};