let _recurringId = null;

function recurringTimer(message, intervalMs) {
  _recurringId = setInterval(() => {
    console.log(message);
  }, intervalMs);
  return _recurringId;
}

function stopRecurringTimer() {
  if (_recurringId !== null) {
    clearInterval(_recurringId);
    _recurringId = null;
  }
}

module.exports = { recurringTimer, stopRecurringTimer };

/* Test Cases
const { recurringTimer, stopRecurringTimer } = require('./path_to_your_file');

describe('recurringTimer', () => {
  it('should log the message at the specified interval', (done) => {
    console.log = jest.fn(); // Mock console.log

    const message = 'Hello, world!';
    const intervalMs = 1000;

    // Start the recurring timer
    recurringTimer(message, intervalMs);

    setTimeout(() => {
      // Verify the message was logged 3 times and no more
      expect(console.log).toHaveBeenCalledTimes(3)
      expect(console.log).toHaveBeenCalledWith(message)

      // Stop the timer
      stopRecurringTimer();
      done();
    }, intervalMs * 3);
  });
});
*/