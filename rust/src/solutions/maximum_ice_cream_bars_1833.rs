pub fn max_ice_cream(costs: Vec<i32>, coins: i32) -> i32 {
    let mut sorted = costs.clone();
    sorted.sort();
    let min = sorted.first().unwrap_or(&0).clone();
    let mut curr = coins;
    let mut i = 0;
    while curr >= min {
        let res = sorted.get(i as usize).filter(|&&x| !(x > curr));

        if let Some(n) = res {
            curr -= n;
            i += 1;
        } else {
            break;
        }
    }

    i
}
