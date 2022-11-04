function nextGreaterElement(n) {
  let arr = n.toString().split('');
  let pivot = -1;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      pivot = i - 1;
      break;
    }
  }
  if (pivot === -1) return -1; // array is in descending order

  for (let i = arr.length - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]]; // swap
      break;
    }
  }
  const left = arr.slice(0, pivot + 1);
  const right = arr.slice(pivot + 1).reverse();
  const res = Number(left.join('') + right.join(''));
  return res > Math.pow(2, 31) - 1 ? -1 : res;
}
