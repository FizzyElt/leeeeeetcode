use std::collections::VecDeque;

use crate::data_structure::linked_list::ListNode;

pub fn rotate_right(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
    if head.is_none() {
        return head;
    }

    let mut len = 1;
    let mut queue: VecDeque<Box<ListNode>> = VecDeque::new();
    let mut head = head.unwrap();
    while let Some(node) = head.next.take() {
        len += 1;
        queue.push_back(head);
        head = node;
    }

    queue.push_back(head);

    let k = k % len;

    for _ in 0..k {
        let next = queue.pop_back().unwrap();
        queue.push_front(next);
    }

    head = queue.pop_front().unwrap();
    let mut ptr = &mut head;
    while let Some(node) = queue.pop_front() {
        ptr.next = Some(node);
        ptr = ptr.next.as_mut().unwrap();
    }

    Some(head)
}
