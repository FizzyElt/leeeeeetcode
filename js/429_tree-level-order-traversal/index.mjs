function levelOrder(root) {
  const res = [];

  function traversal(root, h) {
    if (res.length === h) {
      res.push([root.val]);
    } else {
      res[h].push(root.val);
    }

    for (const node of root.children) {
      traversal(node, h + 1);
    }
  }

  return res;
}
