/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  const stack = [];
  const dummyHead = new ListNode(0, null);
  let dummyCurrent = dummyHead;
  let current = head;

  while (current !== null) {
    stack.push(current);
    current = current.next;
    if (stack.length === k) {
      const [newHead, lastNode] = reverseNodes(stack);
      dummyCurrent.next = newHead;
      dummyCurrent = lastNode;
    }
  }

  dummyCurrent.next = stack[0] || null;

  return dummyHead.next;
}

function reverseNodes(stack) {
  let current = stack.pop() || null;
  const newHead = current;
  while (stack.length !== 0) {
    const next = stack.pop() || null;
    current.next = next;
    current = next;
  }

  current.next = null;

  return [newHead, current];
}
