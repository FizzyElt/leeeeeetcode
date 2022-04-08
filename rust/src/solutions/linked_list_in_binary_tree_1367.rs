use crate::data_structure::binary_tree::TreeNode;
use crate::data_structure::linked_list::ListNode;

use std::cell::RefCell;
use std::rc::Rc;

pub fn is_sub_path(head: Option<Box<ListNode>>, root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    fn helper(head: &Option<Box<ListNode>>, root: &Option<Rc<RefCell<TreeNode>>>) -> bool {
        match (head, root) {
            (Some(_), Some(r)) => {
                dfs(head, root) || helper(head, &r.borrow().left) || helper(head, &r.borrow().right)
            }
            (Some(_), None) => false,
            _ => true,
        }
    }
    fn dfs(head: &Option<Box<ListNode>>, root: &Option<Rc<RefCell<TreeNode>>>) -> bool {
        match (head, root) {
            (Some(h), Some(r)) => {
                h.val == r.borrow().val
                    && (dfs(&h.next, &r.borrow().left) || dfs(&h.next, &r.borrow().right))
            }
            (Some(_), None) => false,
            _ => true,
        }
    }
    helper(&head, &root)
}
