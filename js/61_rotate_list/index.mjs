function rotateRight(head, k) {
  if (!head) {
    return head;
  }

  let len = 1;
  let current = head;
  while (current.next !== null) {
    len += 1;
    current = current.next;
  }

  current.next = head;

  const cutIndex = len - (k % len) - 1;

  let index = 0;
  current = head;
  while (index < cutIndex) {
    index += 1;
    current = current.next;
  }

  const resHead = current.next;
  current.next = null;

  return resHead;
}
