module.exports = function countdownTimer(start) {
  let current = start;
  const intervalId = setInterval(() => {
    if (current > 0) {
      console.log(current);
      current--;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);

  return intervalId;
}