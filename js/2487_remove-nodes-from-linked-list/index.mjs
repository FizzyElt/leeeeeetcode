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
function removeNodes(head) {
	if (head === null) {
		return null;
	}

	if (head.next === null) {
		return head;
	}

	const nextNode = removeNodes(head.next);

	if (nextNode.val > head.val) {
		return nextNode;
	}

	head.next = nextNode;

	return head;
}
