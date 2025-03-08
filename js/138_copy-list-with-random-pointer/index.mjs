function copyRandomList(head) {
  const originList = [];

  let current = head;
  while (current !== null) {
    originList.push(current);
    current = current.next;
  }

  const list = [];

  current = head;

  while (current !== null) {
    const node = new Node(current.val, null, current.random);

    list.push(node);
    current = current.next;
  }

  for (let i = 0; i < list.length; i++) {
    list[i].next = list[i + 1] ?? null;

    const originRandom = list[i].random;

    if (originRandom !== null) {
      const index = originList.findIndex((node) => node === originRandom);
      list[i].random = list[index];
    } else {
      list[i].random = null;
    }
  }

  return list[0] ?? null;
}
