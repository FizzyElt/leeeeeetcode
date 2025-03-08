/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
function numRescueBoats(people, limit) {
  const sortedPeople = people.sort((a, b) => a - b);

  let left = 0;
  let right = sortedPeople.length - 1;

  let count = 0;

  while (left <= right) {
    const rWeight = sortedPeople[right];
    const lWeight = sortedPeople[left];

    if (rWeight + lWeight <= limit) {
      left += 1;
      right -= 1;
    } else {
      right -= 1;
    }

    count += 1;
  }
  return count;
}
