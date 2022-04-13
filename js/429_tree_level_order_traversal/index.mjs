function levelOrder(root) {
  let res = [];

  function traversal(root, h) {
    if (res.length === h) {
      res.push([root.val]);
    } else {
      res[h].push(root.val);
    }

    root.children.forEach((node) => {
      traversal(node, h + 1);
    });
  }

  return res;
}
