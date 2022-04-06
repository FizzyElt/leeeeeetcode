use crate::data_structure::binary_tree::TreeNode;
use std::cell::RefCell;
use std::cmp::max;
use std::rc::Rc;

pub fn is_balanced(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
    let (_, is_balanced) = traverse(root.clone());

    is_balanced
}

pub fn traverse(root: Option<Rc<RefCell<TreeNode>>>) -> (i32, bool) {
    if root.is_none() {
        return (0, true);
    }

    let root = root.unwrap();

    let left_node = (root.clone()).borrow().left.clone();
    let right_node = (root.clone()).borrow().right.clone();

    let (left_height, is_left_balance) = traverse(left_node);
    let (right_height, is_right_balance) = traverse(right_node);

    (
        max(left_height, right_height) + 1,
        (left_height - right_height).abs() < 2 && is_left_balance && is_right_balance,
    )
}
