function average(salary) {
  let sum = 0;
  let min = 100001;
  let max = 0;

  salary.forEach((value) => {
    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }

    sum += value;
  });

  return (sum - max - min) / (salary.length - 2);
}
