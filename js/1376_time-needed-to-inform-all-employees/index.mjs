export function numOfMinutes(n, headID, manager, informTime) {
	const tree = Array.from({ length: n }, () => []);

	for (let i = 0; i < n; i++) {
		const m = manager[i];

		if (m !== -1) {
			tree[m].push(i);
		}
	}

	function dfs(head) {
		const children = tree[head];
		let maxTime = 0;

		for (const child of children) {
			const time = dfs(child);
			maxTime = maxTime > time ? maxTime : time;
		}

		const headTime = informTime[head];
		return maxTime + headTime;
	}

	return dfs(headID);
}
