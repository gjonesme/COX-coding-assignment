export function getAmPm(time) {
  if (time >= 12) {
    return "PM";
  } else {
    return "AM";
  }
}
export function convert24to12(time) {
  return time % 12 === 0 ? 12 : time % 12;
}

export function formatTime(time) {
  return `${convert24to12(time)} ${getAmPm(time)} - ${convert24to12(
    time + 1
  )} ${getAmPm(time + 1)}`;
}
