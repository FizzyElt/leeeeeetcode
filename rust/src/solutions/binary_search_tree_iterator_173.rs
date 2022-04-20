use crate::data_structure::binary_tree::TreeNode;
use std::cell::RefCell;
use std::rc::Rc;

struct BSTIterator {
    arr: Vec<i32>,
    index: i32,
}

impl BSTIterator {
    fn new(root: Option<Rc<RefCell<TreeNode>>>) -> Self {
        let mut arr = vec![];
        inorder_traverse(root, &mut arr);
        Self { arr, index: 0 }
    }

    fn next(&mut self) -> i32 {
        let index = self.index;
        self.index += 1;
        *self.arr.get(index as usize).unwrap_or(&0)
    }

    fn has_next(&self) -> bool {
        match self.arr.get(self.index as usize) {
            Some(_) => true,
            None => false,
        }
    }
}

fn inorder_traverse(root: Option<Rc<RefCell<TreeNode>>>, arr: &mut Vec<i32>) {
    if root.is_none() {
        return;
    }

    let root = root.unwrap();

    inorder_traverse(root.borrow().left.clone(), arr);
    arr.push(root.borrow().val);
    inorder_traverse(root.borrow().right.clone(), arr);
}
