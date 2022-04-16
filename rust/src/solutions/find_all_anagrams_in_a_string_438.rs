pub fn find_anagrams(s: String, p: String) -> Vec<i32> {
    let mut mask = [0; 26];
    let mut result = Vec::new();

    for c in p.chars() {
        mask[(c as usize) - ('a' as usize)] += 1;
    }

    let plen = p.len();
    let s: Vec<char> = s.chars().collect();
    for i in 0..s.len() {
        mask[(s[i] as usize) - ('a' as usize)] -= 1;

        if i >= plen {
            mask[(s[i - plen] as usize) - ('a' as usize)] += 1;
        }

        if i >= plen - 1 && anagram_match(&mask) {
            result.push((i + 1 - plen) as i32);
        }
    }

    result
}

fn anagram_match(mask: &[i32]) -> bool {
    if let Some(_) = mask.iter().find(|&&c| c != 0) {
        return false;
    }

    true
}
