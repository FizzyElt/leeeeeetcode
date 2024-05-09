/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
function maximumHappinessSum(happiness, k) {
	return happiness
		.sort((a, b) => b - a)
		.slice(0, k)
		.reduce((acc, h, index) => acc + Math.max(h - index, 0), 0);
}
