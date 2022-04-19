import { ListNode } from '../utils/linked_list.mjs';

function addTwoNumbers(l1, l2) {
  const reversedL1 = reverseNode(l1);
  const reversedL2 = reverseNode(l2);

  let n1 = reversedL1;
  let n2 = reversedL2;
  let carry = 0;
  let resHead = new ListNode(0, null);
  let current = resHead;

  while (n1 !== null || n2 !== null) {
    const sum = (n1?.val || 0) + (n2?.val || 0) + carry;

    const node = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    current.next = node;
    current = current.next;
    n1 = n1?.next || null;
    n2 = n2?.next || null;
  }

  if (carry > 0) {
    current.next = new ListNode(carry, null);
  }

  return reverseNode(resHead.next);
}

function reverseNode(list) {
  if (!list) {
    return list;
  }

  let current = list;
  let prev = null;
  while (current.next !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  current.next = prev;

  return current;
}
