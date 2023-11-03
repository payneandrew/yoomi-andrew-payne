/**
 * Format a given number of seconds into a MM:SS format string.
 *
 * @param {number} seconds - The number of seconds to be formatted.
 *
 * @returns {string} The input seconds formatted as a MM:SS format string.
 *
 * @example
 *
 *     formatTime(90)  // '01:30'
 *     formatTime(300) // '05:00'
 *     formatTime(3605) // '60:05'
 */
export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
