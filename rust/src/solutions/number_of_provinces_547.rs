pub fn find_circle_num(is_connected: Vec<Vec<i32>>) -> i32 {
    let n = is_connected.len();
    let mut visit = vec![false; n];

    let mut count = 0;

    for i in 0..n {
        if !visit[i] {
            count += 1;
            dfs(i, &mut visit, &is_connected);
        }
    }

    count
}

fn dfs(n: usize, visit: &mut Vec<bool>, is_connected: &Vec<Vec<i32>>) {
    if visit[n] {
        return;
    }

    visit[n] = true;

    for (i, c) in is_connected[n].iter().enumerate() {
        if i != n && *c == 1 {
            dfs(i, visit, is_connected);
        }
    }
}
