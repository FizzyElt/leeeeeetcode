function combinationSum(candidates, target) {
  const getCombination = (ansArr, currentCombination, currSum, currIndex) => {
    if (currSum > target) return;
    if (currSum === target) ansArr.push([...currentCombination]);

    for (let i = currIndex; i < candidates.length; i++) {
      currentCombination.push(candidates[i]);
      currSum = getCombination(
        ansArr,
        currentCombination,
        currSum + candidates[i],
        i
      );
      currentCombination.pop(); // backtracking
    }
  };

  const ansArr = [];
  getCombination(ansArr, [], 0, 0);
  return ansArr;
}
