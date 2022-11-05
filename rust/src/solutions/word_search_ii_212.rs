use std::collections::HashMap;
struct TrieNode {
    next: HashMap<char, TrieNode>,
    word: Option<String>,
}

pub fn find_words(board: Vec<Vec<char>>, words: Vec<String>) -> Vec<String> {
    let mut trie: TrieNode = init_trie(words);

    let mut res: Vec<String> = vec![];
    let mut board = board.clone();

    for row in 0..board.len() {
        for col in 0..board[0].len() {
            dfs(&mut board, row, col, &mut trie, &mut res);
        }
    }

    res
}

fn dfs(
    board: &mut Vec<Vec<char>>,
    row: usize,
    col: usize,
    trie: &mut TrieNode,
    res: &mut Vec<String>,
) {
    let c = board[row][col];

    if c == '#' {
        return;
    }

    let next_node = &mut trie.next;
    if !next_node.contains_key(&c) {
        return;
    }

    let mut next_trie = next_node.get_mut(&c).unwrap();
    if let Some(word) = &next_trie.word {
        res.push(word.to_string());
        next_trie.word = None;
    }

    board[row][col] = '#';

    if row > 0 {
        dfs(board, row - 1, col, next_trie, res);
    }
    if col > 0 {
        dfs(board, row, col - 1, next_trie, res);
    }
    if row < board.len() - 1 {
        dfs(board, row + 1, col, next_trie, res);
    }
    if col < board[0].len() - 1 {
        dfs(board, row, col + 1, next_trie, res);
    }

    board[row][col] = c;
}

fn init_trie(words: Vec<String>) -> TrieNode {
    let mut root = TrieNode {
        next: HashMap::new(),
        word: None,
    };

    for word in words {
        let mut node = &mut root;

        for c in word.chars() {
            node = node.next.entry(c).or_insert(TrieNode {
                next: HashMap::new(),
                word: None,
            });
        }

        node.word = Some(word);
    }

    root
}
