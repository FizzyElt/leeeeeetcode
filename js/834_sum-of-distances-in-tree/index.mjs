/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function sumOfDistancesInTree(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const nodeCount = Array.from({ length: n }, () => 0);
  const res = Array.from({ length: n }, () => 0);

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const dfs = (current, parent) => {
    nodeCount[current] = 1;
    for (const child of graph[current]) {
      if (child !== parent) {
        const path = dfs(child, current);
        nodeCount[current] += nodeCount[child];
        res[current] += path + nodeCount[child];
      }
    }

    return res[current];
  };

  const dfs2 = (current, parent) => {
    for (const child of graph[current]) {
      if (child !== parent) {
        res[child] = res[current] + n - 2 * nodeCount[child];
        dfs2(child, current);
      }
    }
  };

  dfs(0, -1);
  dfs2(0, -1);

  return res;
}
