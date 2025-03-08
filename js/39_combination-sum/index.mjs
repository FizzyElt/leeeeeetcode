function combinationSum(candidates, target) {
  const getCombination = (ansArr, currentCombination, currSum, currIndex) => {
    let currentSum = currSum;
    if (currentSum > target) return;
    if (currentSum === target) ansArr.push([...currentCombination]);

    for (let i = currIndex; i < candidates.length; i++) {
      currentCombination.push(candidates[i]);
      currentSum = getCombination(
        ansArr,
        currentCombination,
        currentSum + candidates[i],
        i,
      );
      currentCombination.pop(); // backtracking
    }
  };

  const ansArr = [];
  getCombination(ansArr, [], 0, 0);
  return ansArr;
}
