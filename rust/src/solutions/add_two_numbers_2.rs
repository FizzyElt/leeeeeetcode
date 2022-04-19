use crate::data_structure::linked_list::ListNode;

pub fn add_two_numbers(
    l1: Option<Box<ListNode>>,
    l2: Option<Box<ListNode>>,
) -> Option<Box<ListNode>> {
    let mut dummy_head = ListNode::new(0);
    let mut current = &mut dummy_head;
    let mut n1 = l1;
    let mut n2 = l2;

    let mut carry: i32 = 0;

    while !n1.is_none() || !n2.is_none() {
        let sum = match (&n1, &n2) {
            (Some(node1), Some(node2)) => node1.val + node2.val + carry,
            (Some(node1), None) => node1.val + carry,
            (None, Some(node2)) => node2.val + carry,
            (None, None) => carry,
        };

        carry = sum / 10;
        current.next = Some(Box::new(ListNode::new(sum % 10)));
        current = current.next.as_mut().unwrap();

        n1 = if let Some(node) = n1 { node.next } else { n1 };
        n2 = if let Some(node) = n2 { node.next } else { n2 };
    }

    if carry > 0 {
        current.next = Some(Box::new(ListNode::new(carry)));
    }

    dummy_head.next
}
