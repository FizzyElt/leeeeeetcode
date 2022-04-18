function reorderList(head) {
  const list = [];
  let current = head;

  while (current !== null) {
    list.push(current);
    current = current.next;
  }

  let left = 0;
  let right = list.length - 1;
  let k = true;
  while (left < right) {
    if (k) {
      list[left].next = list[right] ?? null;
      left += 1;
      k = false;
    } else {
      list[right].next = list[left] ?? null;
      right -= 1;
      k = true;
    }
  }

  list[left].next = null;

  return list[0];
}
