const EPS = 1e-6;

export default function ({ a, b, c }) {
  if (Math.abs(a) < EPS) {
    if (Math.abs(b) < EPS) {
      return (Math.abs(c) < EPS) ? 'Many' : 'No solution';
    }
    return -c / b;
  }
  const d = b * b - 4 * a * c;
  if (d < 0) {
    return 'No solution';
  }
  const a2 = 2 * a;
  if (Math.abs(d) < EPS) {
    return [-b / a2];
  }
  const dSqrt = Math.sqrt(d);
  return [(-b - dSqrt) / a2, (-b + dSqrt) / a2].sort();
}
