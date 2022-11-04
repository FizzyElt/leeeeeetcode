pub fn check_record(s: String) -> bool {
    let mut absentCount = 0;
    let mut lateCount = 0;

    for c in s.chars() {
        if c == 'A' {
            absentCount += 1;
            if absentCount == 2 {
                return false;
            }
        }

        if c == 'L' {
            lateCount += 1;
            if lateCount == 3 {
                return false;
            }
        } else {
            lateCount = 0;
        }
    }

    true
}
