function BSTIterator(root) {
  const arr = [];

  function traverse(root) {
    if (!root) {
      return;
    }

    traverse(root.left);
    arr.push(root.val);
    traverse(root.right);
  }

  traverse(root);

  this.arr = arr;
  this.index = 0;
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const index = this.index;
  this.index += 1;
  return this.arr[index];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return !!this.arr[this.index] === undefined;
};
