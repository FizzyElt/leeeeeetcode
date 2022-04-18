use std::borrow::Borrow;

use crate::data_structure::linked_list::ListNode;

pub fn reorder_list(head: &mut Option<Box<ListNode>>) {
    let len = length_of_list(&head);

    let mut ptr = head.as_mut();
    for _ in 0..(len / 2) {
        if let Some(node) = ptr {
            ptr = node.next.as_mut();
        }
    }

    if let Some(node) = ptr {
        let reversed_list = reverse_list(node.next.take(), None);

        if let Some(node) = head {
            node.next = merge_list(reversed_list, node.next.take(), len - 1);
        }
    }
}

fn length_of_list(mut head: &Option<Box<ListNode>>) -> usize {
    let mut count = 0;
    while let Some(node) = head {
        head = &node.next;
        count += 1;
    }
    count
}

fn reverse_list(
    head: Option<Box<ListNode>>,
    accumulator: Option<Box<ListNode>>,
) -> Option<Box<ListNode>> {
    match head {
        None => accumulator,
        Some(mut node) => {
            let next = node.next;
            node.next = accumulator;

            reverse_list(next, Some(node))
        }
    }
}

fn merge_list(
    mut left: Option<Box<ListNode>>,
    right: Option<Box<ListNode>>,
    count: usize,
) -> Option<Box<ListNode>> {
    if count == 0 {
        return None;
    }

    match (left.as_mut(), right.as_ref()) {
        (None, None) => None,
        (Some(_), None) => left,
        (None, Some(_)) => right,
        (Some(l), Some(_)) => {
            l.next = merge_list(right, l.next.take(), count - 1);
            left
        }
    }
}
