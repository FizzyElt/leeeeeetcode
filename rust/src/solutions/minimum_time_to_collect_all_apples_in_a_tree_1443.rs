pub fn min_time(n: i32, edges: Vec<Vec<i32>>, has_apple: Vec<bool>) -> i32 {
    let mut map: Vec<Vec<i32>> = vec![vec![]; n as usize];
    let mut visited: Vec<bool> = vec![false; n as usize];

    for edge in edges {
        let origin = edge[0];
        let target = edge[1];

        map[origin as usize].push(target);
        map[target as usize].push(origin);
    }

    let res = dfs(0, &has_apple, &map, &mut visited);

    if res > 0 {
        return res - 2;
    }

    0
}

fn dfs(root: usize, has_apple: &Vec<bool>, map: &Vec<Vec<i32>>, visited: &mut Vec<bool>) -> i32 {
    if visited[root] {
        return 0;
    }

    visited[root] = true;

    let mut sub_tree_path = 0;

    for &node in map[root].iter() {
        sub_tree_path += dfs(node as usize, has_apple, map, visited);
    }

    sub_tree_path += if has_apple[root] || sub_tree_path > 0 {
        2
    } else {
        0
    };

    visited[root] = false;
    sub_tree_path
}
