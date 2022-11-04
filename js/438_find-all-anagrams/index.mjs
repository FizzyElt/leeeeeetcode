function findAnagrams(s, p) {
  let left = 0;
  let right = 0;

  let m = new Map();
  for (let letter of p) m.set(letter, m.get(letter) + 1 || 1);

  let counter = m.size;
  let res = [];

  while (right < s.length) {
    let letter = s[right];
    if (m.has(letter)) m.set(letter, m.get(letter) - 1);
    if (m.get(letter) == 0) counter--;

    while (counter == 0) {
      if (right - left + 1 == p.length) res.push(left);
      if (m.has(s[left])) m.set(s[left], m.get(s[left]) + 1);
      if (m.get(s[left]) > 0) counter++;
      left++;
    }
    right++;
  }
  return res;
}
