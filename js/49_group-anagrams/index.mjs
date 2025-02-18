function groupAnagrams(strs) {
	const m = new Map();

	for (const str of strs) {
		const sortedStr = str.split("").sort().join("");

		m.set(sortedStr, [...(m.get(sortedStr) || []), str]);
	}

	return [...m.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
