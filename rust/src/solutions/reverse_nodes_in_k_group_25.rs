use crate::data_structure::linked_list::ListNode;

pub fn reverse_k_group(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
    let mut head = head;
    let mut node = &mut head;
    for _ in 0..k {
        if let Some(n) = node {
            node = &mut n.next;
        } else {
            return head;
        }
    }
    let mut ret = reverse_k_group(node.take(), k);
    while let Some(h) = head.take() {
        ret = Some(Box::new(ListNode {
            val: h.val,
            next: ret,
        }));
        head = h.next;
    }
    ret
}
