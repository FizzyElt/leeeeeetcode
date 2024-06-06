/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
function compactObject(obj) {
	if (Array.isArray(obj)) {
		const arr = [];

		for (const value of obj) {
			if (Boolean.call(null, value)) {
				const res = compactObject(value);
				arr.push(res);
			}
		}

		return arr;
	}

	if (typeof obj === "object" && obj !== null) {
		const entries = Object.entries(obj);
		const newObj = {};

		for (const [key, value] of entries) {
			if (Boolean.call(null, value)) {
				newObj[key] = compactObject(value);
			}
		}

		return newObj;
	}

	return obj;
}
