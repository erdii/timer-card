const leftPad = (num: number) => (num < 10 ? `0${num}` : num);

export default function secondsToDuration(d: number) {
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);

  if (h > 0) {
    return `${h}:${leftPad(m)}:${leftPad(s)}`;
  }
  if (m > 0) {
    return `00:${leftPad(m)}:${leftPad(s)}`;
  }
  if (s > 0) {
    return `00:00:${leftPad(s)}`;
  }
  return null;
}
