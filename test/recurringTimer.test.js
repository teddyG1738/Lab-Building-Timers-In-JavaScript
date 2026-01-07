jest.useFakeTimers()
const { recurringTimer, stopRecurringTimer } = require('../src/recurringTimer')

describe('recurringTimer', () => {
  test('should log the message at the specified interval', () => {
    console.log = jest.fn() // Mock console.log

    const message = 'Recurring message'
    const interval = 2000 // 2 seconds
    const timerId = recurringTimer(message, interval)

    // Simulate multiple intervals
    jest.advanceTimersByTime(6000) // Advance by 6 seconds (3 intervals)

    // Verify the message is logged 3 times
    expect(console.log).toHaveBeenCalledTimes(3)
    expect(console.log).toHaveBeenCalledWith(message)

    // Stop the timer
    stopRecurringTimer(timerId)
  })

  test('should stop logging when stopRecurringTimer is called', () => {
    console.log = jest.fn()

    const message = 'Stop this message'
    const interval = 1000 // 1 second
    const timerId = recurringTimer(message, interval)

    // Simulate a few intervals and then stop
    jest.advanceTimersByTime(3000) // Advance by 3 seconds
    stopRecurringTimer(timerId)
    jest.advanceTimersByTime(2000) // Advance by another 2 seconds

    // Verify the message was logged 3 times and no more
    expect(console.log).toHaveBeenCalledTimes(3)
    expect(console.log).toHaveBeenCalledWith(message)
  })

  test('should count down from the start time to 1', () => {
    console.log = jest.fn()
    const startTime = 5 // 5 seconds countdown
    const interval = 1000 // 1 second interval
    const timerId = recurringTimer(startTime, interval)

    // Simulate the passage of time
    jest.advanceTimersByTime(startTime * 1000)

    // Verify that console.log was called with the countdown numbers
    expect(console.log).toHaveBeenCalledTimes(startTime);
    for (let i = startTime; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(i);
    }

    // Stop the timer
    stopRecurringTimer(timerId)
  })
})
