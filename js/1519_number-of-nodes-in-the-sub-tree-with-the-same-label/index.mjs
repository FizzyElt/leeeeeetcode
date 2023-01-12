/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
const countSubTrees = (n, edges, labels) => {
  const map = edges.reduce(
    (acc, edge) => {
      const [origin, target] = edge;
      acc[origin].push(target);
      acc[target].push(origin);
      return acc;
    },
    Array.from({ length: n }, () => [])
  );

  const resCount = new Array(n).fill(0);

  function dfs(root, parent) {
    const label = labels.charCodeAt(root) - 97;

    const charCount = new Array(26).fill(0);

    charCount[label] = 1;

    map[root].forEach((node) => {
      if (node === parent) return;

      const subCharCount = dfs(node, root);

      for (let i = 0; i < 26; i++) {
        charCount[i] += subCharCount[i];
      }
    });

    resCount[root] = charCount[label];
    return charCount;
  }

  dfs(0, -1);

  return resCount;
};
