pub fn maximum_bags(capacity: Vec<i32>, rocks: Vec<i32>, additional_rocks: i32) -> i32 {
    let mut bag_rest_capacities: Vec<i32> = capacity
        .iter()
        .enumerate()
        .map(|(i, capacity)| capacity - rocks[i])
        .collect();

    bag_rest_capacities.sort();

    let mut rest_rocks = additional_rocks;

    for (index, &rest_capacity) in bag_rest_capacities.iter().enumerate() {
        if rest_rocks == rest_capacity {
            return (index + 1) as i32;
        }

        if rest_rocks < rest_capacity {
            return index as i32;
        }

        rest_rocks -= rest_capacity;
    }

    bag_rest_capacities.len() as i32
}
