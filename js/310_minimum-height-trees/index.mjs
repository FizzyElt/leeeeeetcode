// 能夠是最小高的的頂點一定是左右平衡

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function findMinHeightTrees(n, edges) {
  if (n === 1) return [0];

  const adjList = Array.from({ length: n }, () => new Set());
  for (const [a, b] of edges) {
    adjList[a].add(b);
    adjList[b].add(a);
  }

  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (adjList[i].size === 1) {
      leaves.push(i);
    }
  }

  let remainingNodes = n;
  while (remainingNodes > 2) {
    remainingNodes -= leaves.length;
    const newLeaves = [];

    for (const leaf of leaves) {
      const neighbor = Array.from(adjList[leaf])[0];
      adjList[neighbor].delete(leaf);

      if (adjList[neighbor].size === 1) {
        newLeaves.push(neighbor);
      }
    }

    leaves = newLeaves;
  }

  return leaves;
}
