/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function doubleIt(head) {
	function helper(head) {
		if (head === null) {
			return [0, null];
		}

		const [carry, node] = helper(head.next);

		const double = head.val * 2 + carry;

		const newCarry = Math.floor(double / 10);

		head.next = node;
		head.val = double % 10;

		return [newCarry, head];
	}

	const [carry, node] = helper(head);

	if (carry > 0) {
		return new ListNode(carry, node);
	}

	return node;
}
