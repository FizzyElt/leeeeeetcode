export function numOfMinutes(n, headID, manager, informTime) {
  // converting given data into graph in adjacency list
  let hierarchy = new Array(n);
  for (let i = 0; i < n; i++) hierarchy[i] = []; // initialise with empty array

  // index represents manager's id and values represent the manager's subordinates' id's
  for (let i = 0; i < manager.length; i++) {
    let managerId = manager[i];
    if (managerId !== -1) hierarchy[managerId].push(i);
    // except for head who has no manager
  }

  let max = 0;
  function dfs(curID, count) {
    let subordinates = hierarchy[curID];
    if (subordinates.length == 0) {
      max = Math.max(max, count);
      return;
    }
    for (let subordinate of subordinates) {
      dfs(subordinate, count + informTime[curID]);
    }
  }
  dfs(headID, 0);
  return max;
  // DFS
  // Time Complexity: O(n)
  // Space Complexity: O(n)
}
