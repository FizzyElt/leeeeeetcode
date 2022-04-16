pub fn num_of_minutes(n: i32, head_id: i32, manager: Vec<i32>, inform_time: Vec<i32>) -> i32 {
    let mut hierarchy: Vec<Vec<i32>> = vec![vec![]; n as usize];

    for (i, manager_id) in manager.iter().enumerate() {
        if *manager_id != -1 {
            hierarchy[*manager_id as usize].push(i as i32);
        }
    }

    let mut max = 0;

    dfs(head_id, 0, &mut max, &hierarchy, &&inform_time);

    max
}

fn dfs(cur_id: i32, count: i32, max: &mut i32, hierarchy: &Vec<Vec<i32>>, inform_time: &Vec<i32>) {
    let subordinates = &hierarchy[cur_id as usize];

    if subordinates.len() == 0 {
        *max = std::cmp::max(*max, count);

        return;
    }

    for subordinate in subordinates {
        dfs(
            *subordinate,
            count + inform_time[cur_id as usize],
            max,
            hierarchy,
            inform_time,
        )
    }
}
