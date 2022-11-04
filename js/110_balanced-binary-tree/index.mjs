var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  const [_, isBalance] = traverse(root);

  return isBalance;
};

function traverse(root) {
  if (!root) {
    return [0, true];
  }
  const [leftHeight, isLeftBalanced] = traverse(root.left);
  const [rightHeight, isRightBalanced] = traverse(root.right);

  return [
    Math.max(leftHeight, rightHeight) + 1,
    Math.abs(leftHeight - rightHeight) < 2 && isLeftBalanced && isRightBalanced,
  ];
}
