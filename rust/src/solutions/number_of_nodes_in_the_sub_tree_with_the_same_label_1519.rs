pub fn count_sub_trees(n: i32, edges: Vec<Vec<i32>>, labels: String) -> Vec<i32> {
    let chars: Vec<u8> = labels.into_bytes();
    let mut res_count: Vec<i32> = vec![0; n as usize];
    let map: Vec<Vec<i32>> = edges
        .iter()
        .fold(vec![vec![]; n as usize], |mut acc, edge| {
            let origin = edge[0];
            let target = edge[1];
            acc[origin as usize].push(target);
            acc[target as usize].push(origin);
            acc
        });

    dfs(0, n as usize, &map, &chars, &mut res_count);

    res_count
}

fn dfs(
    root: usize,
    parent: usize,
    map: &Vec<Vec<i32>>,
    chars: &Vec<u8>,
    res_count: &mut Vec<i32>,
) -> Vec<i32> {
    let label = (chars[root] - 97) as usize;

    let mut char_count = vec![0; 26];
    char_count[label] = 1;

    for &node in map[root].iter() {
        let node = node as usize;
        if node == parent {
            continue;
        }
        let sub_char_count = dfs(node, root, map, chars, res_count);

        for i in 0..26 {
            char_count[i] += sub_char_count[i];
        }
    }

    res_count[root] = char_count[label];

    char_count
}
