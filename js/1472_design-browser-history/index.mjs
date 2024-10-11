/**
 * @param {string} homepage
 */
const BrowserHistory = function (homepage) {
	this.cursor = 0;
	this.history = [homepage];
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
	this.history = this.history.slice(0, this.cursor + 1);
	this.history.push(url);
	this.cursor = this.history.length - 1;

	return null;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
	this.cursor = Math.max(0, this.cursor - steps);
	return this.history[this.cursor];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
	this.cursor = Math.min(this.history.length - 1, this.cursor + steps);

	return this.history[this.cursor];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
