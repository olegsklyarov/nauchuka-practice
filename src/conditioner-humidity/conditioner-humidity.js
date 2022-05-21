export default function ({ T, t, h }) {
  if (h <= 80 && t > T) {
    return 'on';
  }
  return 'off';
}
