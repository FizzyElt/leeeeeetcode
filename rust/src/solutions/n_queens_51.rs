pub fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
    let mut result: Vec<Vec<String>> = Vec::new();
    let mut board: Vec<Vec<char>> = vec![vec!['.'; n as usize]; n as usize];

    backtrack(&mut board, 0, &mut result);

    return result;
}

fn is_valid(board: &Vec<Vec<char>>, row: usize, col: usize) -> bool {
    for i in 0..board.len() {
        if board[i][col] == 'Q' {
            return false;
        }
    }

    let mut i = row as i32;
    let mut j = col as i32;
    while i >= 0 && j >= 0 {
        if board[i as usize][j as usize] == 'Q' {
            return false;
        }
        i -= 1;
        j -= 1;
    }
    let mut i = row as i32;
    let mut j = col as i32;
    while i >= 0 && j < board.len() as i32 {
        if board[i as usize][j as usize] == 'Q' {
            return false;
        }
        i -= 1;
        j += 1;
    }
    true
}

fn backtrack(board: &mut Vec<Vec<char>>, row: usize, res: &mut Vec<Vec<String>>) -> () {
    if row == board.len() {
        res.push(
            board
                .iter()
                .map(|v| v.iter().map(|c| c.to_string()).collect())
                .collect(),
        );
    }

    for i in 0..board.len() {
        if is_valid(board, row, i) {
            board[row][i] = 'Q';
            backtrack(board, row + 1, res);
            board[row][i] = '.';
        }
    }
}

#[cfg(test)]
mod tests {
    use super::solve_n_queens;

    #[test]
    fn solve_n_queens_1() {
        assert_eq!(solve_n_queens(1), vec![vec!["Q"]]);
    }

    #[test]
    fn solve_n_queen_4() {
        assert_eq!(
            solve_n_queens(4),
            vec![
                vec![".Q..", "...Q", "Q...", "..Q."],
                vec!["..Q.", "Q...", "...Q", ".Q.."]
            ]
        );
    }

    #[test]
    fn solve_n_queens_5() {
        assert_eq!(
            solve_n_queens(5),
            vec![
                vec!["Q....", "..Q..", "....Q", ".Q...", "...Q."],
                vec!["Q....", "...Q.", ".Q...", "....Q", "..Q.."],
                vec![".Q...", "...Q.", "Q....", "..Q..", "....Q"],
                vec![".Q...", "....Q", "..Q..", "Q....", "...Q."],
                vec!["..Q..", "Q....", "...Q.", ".Q...", "....Q"],
                vec!["..Q..", "....Q", ".Q...", "...Q.", "Q...."],
                vec!["...Q.", "Q....", "..Q..", "....Q", ".Q..."],
                vec!["...Q.", ".Q...", "....Q", "..Q..", "Q...."],
                vec!["....Q", ".Q...", "...Q.", "Q....", "..Q.."],
                vec!["....Q", "..Q..", "Q....", "...Q.", ".Q..."],
            ]
        );
    }
}
