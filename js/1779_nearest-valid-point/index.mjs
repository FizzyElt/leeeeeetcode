function nearestValidPoint(x, y, points) {
  const { index } = points.reduce(
    (acc, point, index) => {
      const [pointX, pointY] = point;

      if (x === pointX || y === pointY) {
        const distance = Math.abs(x - pointX) + Math.abs(y - pointY);

        if (distance < acc.minDistance) {
          acc.index = index;
          acc.minDistance = distance;
        }
      }

      return acc;
    },
    {
      index: -1,
      minDistance: 10001,
    },
  );

  return index;
}
