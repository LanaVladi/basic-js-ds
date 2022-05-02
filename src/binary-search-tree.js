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

    this.root = addNode(this.root, data);

    function addNode (node, data) {
    if (!node) {
     return new Node (data);
    }

    if (node.data === data) {
      return node;
    }

    if (data < node.data) {
      node.left = addNode(node.left, data);
    } else {
      node.right = addNode(node.right, data);
    }
    return node;
   }
  }


  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
return searchNode(this.root, data);

function searchNode(node, data) {
if (!node) {
  return false;
}
if (node.data === data) {
  return true;
}
return (data < node.data) ?
searchNode(node.left, data) :
searchNode(node.right, data);
}
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.root = removeNode(this.root, data);

    function removeNode (node, data) {
    if (!node) {
     return null;
    }

      if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
    return null;
  }

  if (!node.left) {
    node = node.right;
    return node;
  }

  if (!node.right) {
    node = node.left;
    return node;
  }

  let minFromRight = node.right;
  while (minFromRight.left) {
    minFromRight = minFromRight.left;
  }
  node.data = minFromRight.data;
  node.right = removeNode(node.right, minFromRight.data);
  return node;
}
  }
}


  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root) {
      return;
    }
    
    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}

module.exports = {
  BinarySearchTree
};