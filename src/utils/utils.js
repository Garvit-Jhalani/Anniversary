export function timeLeft() {
  let today = new Date();
  let marryDay = new Date(2024, 3, 30, 0, 0, 0);
  let timeLeft = (marryDay - today);

  let day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hour = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((timeLeft % (1000 * 60)) / 1000);
  let time = {
      day: day,
      hour: hour,
      minute: minute,
      second: second
  }
  return time;
}
