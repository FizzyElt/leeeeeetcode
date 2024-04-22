/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
function openLock(deadends, target) {
  if (deadends.includes('0000')) {
    return -1;
  }

  const visited = new Set(deadends);
  const queue = [['0000', 0]];

  while (queue.length) {
    const [cur, count] = queue.shift();

    if (cur === target) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const c = cur[i];

      const up = c === '9' ? '0' : (Number(c) + 1).toString();
      const down = c === '0' ? '9' : (Number(c) - 1).toString();

      const next = cur.substring(0, i) + up + cur.substring(i + 1);
      const prev = cur.substring(0, i) + down + cur.substring(i + 1);

      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, count + 1]);
      }

      if (!visited.has(prev)) {
        visited.add(prev);
        queue.push([prev, count + 1]);
      }
    }
  }

  return -1;
}
