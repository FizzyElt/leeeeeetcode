export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export function insertNode(head, val, index, current = 0) {
  if (!head) {
    return new ListNode(val, null);
  }

  if (index === current) {
    const node = new ListNode(val, head);
    return node;
  }

  head.next = insertNode(head.next, val, index, current + 1);

  return head;
}

export function insertNodeToEnd(head, val) {
  if (!head) {
    return new ListNode(val, null);
  }

  head.next = insertNodeToEnd(head.next, val);

  return head;
}

export function insertNodeToFront(node, val) {
  return insertNode(node, val, 0);
}

export function transformListNodeToArray(node) {
  let current = node;
  let arr = [];

  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}
