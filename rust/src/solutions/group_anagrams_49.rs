use std::collections::HashMap;

pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    let mut m: HashMap<String, Vec<String>> = HashMap::new();

    strs.into_iter().for_each(|str| {
        let mut sorted_str: Vec<char> = str.clone().chars().collect();
        sorted_str.sort_by(|a, b| a.cmp(b));
        let sorted_str: String = sorted_str.into_iter().collect();

        match m.get_mut(&sorted_str) {
            Some(arr) => {
                (*arr).push(str);
            }
            None => {
                m.insert(sorted_str, vec![str]);
            }
        }
    });

    let res: Vec<Vec<String>> = m.values().into_iter().map(|v| v.clone()).collect();

    return res;
}
