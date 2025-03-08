/**
 * @param {string} word
 * @return {number}
 */
function wonderfulSubstrings(word) {
  let count = 0;

  const n = word.length;

  const freq = new Array(1024).fill(0); // Array to store frequencies of characters

  freq[0] = 1; // Initialize with an empty substring

  let bitmask = 0; // Bitmask to represent frequency of characters

  // Iterate over all characters

  for (let i = 0; i < n; i++) {
    const charIndex = word.charCodeAt(i) - "a".charCodeAt();

    bitmask ^= 1 << charIndex; // Toggle the bit for the current character

    // Increase count for wonderful substrings

    count += freq[bitmask];

    // Update frequencies array

    for (let j = 0; j < 10; j++) {
      const newBitmask = bitmask ^ (1 << j);

      count += freq[newBitmask];
    }

    freq[bitmask]++;
  }

  return count;
}

console.log(wonderfulSubstrings("aba"));
