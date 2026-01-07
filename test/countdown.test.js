const { countdownTimer } = require('../src/countdown');

jest.useFakeTimers();

describe('countdownTimer', () => {
  test('should log remaining time at intervals and stop at 0', () => {
    console.log = jest.fn();

    const startTime = 5;
    const interval = 1000;
    const timerId = countdownTimer(startTime, interval);

    // Simulate time
    jest.advanceTimersByTime(startTime * interval);

    // Verify that console.log was called correctly
    expect(console.log).toHaveBeenCalledTimes(startTime);
    for (let i = startTime; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(i);
    }

    // Stop the timer if needed
    clearInterval(timerId);
  });
});
