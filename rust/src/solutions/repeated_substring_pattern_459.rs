pub fn repeated_substring_pattern(s: String) -> bool {
    let mut new_string = s.clone();
    new_string.push_str(&s.clone());

    let new_string = &new_string[1..new_string.len() - 1];

    let index = new_string.find(&s);

    if let Some(_) = index {
        return true;
    }

    false
}
