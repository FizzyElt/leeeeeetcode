/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
const maximumBags = (capacity, rocks, additionalRocks) => {
  const bagRestCapacities = capacity
    .map((capacity, index) => capacity - rocks[index])
    .sort((a, b) => a - b);

  let restRocks = additionalRocks;

  for (let i = 0; i < bagRestCapacities.length; i++) {
    const restCapacity = bagRestCapacities[i];

    if (restRocks === restCapacity) return i + 1;

    if (restRocks < restCapacity) return i;

    restRocks -= restCapacity;
  }

  return bagRestCapacities.length;
};
