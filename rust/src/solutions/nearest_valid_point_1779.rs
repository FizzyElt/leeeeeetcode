pub fn nearest_valid_point(x: i32, y: i32, points: Vec<Vec<i32>>) -> i32 {
    let mut index = -1;
    let mut min_distance = 10001;
    for (i, point) in points.into_iter().enumerate() {
        let point_x = point[0];
        let point_y = point[1];

        if x == point_x || y == point_y {
            let distance = (x - point_x).abs() + (y - point_y).abs();

            if distance < min_distance {
                index = i as i32;

                min_distance = distance;
            }
        }
    }

    return index;
}
