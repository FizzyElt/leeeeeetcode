/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  let product = 1;
  const res = Array.from({ length: nums.length }, (_, index) => {
    const num = nums[index] * product;
    product = num;
    return num;
  });

  product = 1;

  console.log(res);
  for (let i = nums.length - 1; i >= 0; i--) {
    const left = res[i - 1] ?? 1;
    res[i] = product * left;
    product *= nums[i];
  }

  return res;
};
