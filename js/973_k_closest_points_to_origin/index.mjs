function kClosest(points, k) {
  const sortedPoints = points.sort(
    ([p1x, p1y], [p2x, p2y]) => p1x * p1x + p1y * p1y - (p2x * p2x + p2y * p2y)
  );

  return sortedPoints.slice(0, k);
}
