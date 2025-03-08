import { ListNode } from "../utils/linked_list.mjs";

export function addTwoNumbers(l1, l2) {
  let n1 = l1;
  let n2 = l2;
  let carry = 0;
  const resHead = new ListNode(0, null);

  let current = resHead;

  while (n1 !== null || n2 !== null) {
    const sum = (n1?.val || 0) + (n2?.val || 0) + carry;

    const node = new ListNode(sum % 10, null);
    carry = Math.floor(sum / 10);
    current.next = node;
    current = current.next;
    n1 = n1?.next || null;
    n2 = n2?.next || null;
  }

  if (carry > 0) {
    current.next = new ListNode(carry, null);
  }

  return resHead.next;
}
