function delayedReminder(message, delay) {
  return setTimeout(() => {
    console.log(message);
  }, delay);
}

module.exports = delayedReminder;