/**
 * - + \ = right 90 deg
 * - + / = left 90 deg
 * | + \ = left 90 deg
 * | + / = right 90 deg
 */

function rotate(matrix) {
	const len = matrix.length;

	// reverse
	for (let i = 0; i < len >> 1; i++) {
		const temp = matrix[i];
		matrix[i] = matrix[len - i - 1];
		matrix[len - i - 1] = temp;
	}

	// flip
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < i; j++) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	return matrix;
}
