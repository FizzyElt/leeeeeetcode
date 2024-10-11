use std::cmp::{max, min};

struct BrowserHistory {
    cursor: i32,
    history: Vec<String>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl BrowserHistory {
    fn new(homepage: String) -> Self {
        Self {
            cursor: 0,
            history: vec![homepage],
        }
    }

    fn visit(&mut self, url: String) {
        self.history.truncate(self.cursor as usize + 1);

        self.history.push(url);
        self.cursor = self.history.len() as i32 - 1;
    }

    fn back(&mut self, steps: i32) -> String {
        let cursor = max(self.cursor - steps, 0);
        self.cursor = cursor;
        self.history[cursor as usize].clone()
    }

    fn forward(&mut self, steps: i32) -> String {
        let cursor = min((self.history.len() - 1) as i32, self.cursor + steps);

        self.cursor = cursor;
        self.history[cursor as usize].clone()
    }
}
