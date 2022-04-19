use crate::data_structure::linked_list::ListNode;

pub fn add_two_numbers(
    l1: Option<Box<ListNode>>,
    l2: Option<Box<ListNode>>,
) -> Option<Box<ListNode>> {
    let mut l1 = reverse_list(l1);
    let mut l2 = reverse_list(l2);

    let mut dummy_head = ListNode::new(0);
    let mut current = &mut dummy_head;
    let mut carry = 0;

    while !l1.is_none() || !l2.is_none() {
        let sum = match (&l1, &l2) {
            (Some(node1), Some(node2)) => node1.val + node2.val + carry,
            (Some(node1), None) => node1.val + carry,
            (None, Some(node2)) => node2.val + carry,
            (None, None) => carry,
        };

        carry = sum / 10;
        current.next = Some(Box::new(ListNode::new(sum % 10)));
        current = current.next.as_mut().unwrap();

        l1 = if let Some(node) = l1 { node.next } else { l1 };
        l2 = if let Some(node) = l2 { node.next } else { l2 };
    }

    if carry > 0 {
        current.next = Some(Box::new(ListNode::new(carry)));
    }

    reverse_list(dummy_head.next)
}

fn reverse_list(mut list: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
    let mut head = None;

    while let Some(mut node) = list.take() {
        list = node.next.take();
        node.next = head;
        head = Some(node);
    }

    head
}
