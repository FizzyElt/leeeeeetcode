function isSubPath(head, root) {
  if (!head || !root) {
    return false;
  }

  if (dfs(root, head)) {
    return true;
  }

  return isSubPath(head, root.left) || isSubPath(head, root.right);
}

function dfs(root, node) {
  if (!node) {
    return true;
  }

  if (!root || root.val !== node.val) {
    return false;
  }

  return dfs(root.left, node.next) || dfs(root.right, node.next);
}
