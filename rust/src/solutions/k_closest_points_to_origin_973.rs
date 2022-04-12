pub fn k_closest(points: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
    let mut points = points;
    points.sort_by(|a, b| {
        let (p1x, p1y) = (a.get(0).unwrap_or(&0), a.get(1).unwrap_or(&0));
        let (p2x, p2y) = (b.get(0).unwrap_or(&0), b.get(1).unwrap_or(&0));

        (p1x * p1x + p1y * p1y).cmp(&(p2x * p2x + p2y * p2y))
    });

    return points.into_iter().take(k as usize).collect();
}
