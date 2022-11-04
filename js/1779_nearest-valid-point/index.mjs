import * as R from 'ramda';

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
    }
  );

  return index;
}

function nearestValidPoint2(x, y, points) {
  const [index, distance] = R.pipe(
    R.toPairs,
    R.filter(([_, point]) => R.equals(x, point[0]) || R.equals(y, point[1])),
    R.map(([index, point]) => [
      index,
      Math.abs(x - point[0]) + Math.abs(y - point[1]),
    ]),
    R.reduce(
      R.minBy(([_, distance]) => distance),
      [-1, 10001]
    )
  )(points);

  return index;
}
