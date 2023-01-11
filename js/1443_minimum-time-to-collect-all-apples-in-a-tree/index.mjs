/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const map = edges.reduce((acc, edge) => {
    const [origin, target] = edge;

    acc.set(origin, [...(acc.get(origin) || []), target]);
    acc.set(target, [...(acc.get(target) || []), origin]);

    return acc;
  }, new Map());

  const visited = new Set();

  function dfs(root) {
    if (visited.has(root)) return 0;
    const children = map.get(root) || [];

    visited.add(root);

    let subTreePath = 0;
    children.forEach((node) => {
      subTreePath += dfs(node);
    });

    subTreePath += hasApple[root] || subTreePath > 0 ? 2 : 0;

    visited.delete(root);
    return subTreePath;
  }

  const res = dfs(0);

  return res > 0 ? res - 2 : 0;
};
