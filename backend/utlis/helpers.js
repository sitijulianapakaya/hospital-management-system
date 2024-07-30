// helpers.js

/**
 * Format a date into a readable string format (e.g., YYYY-MM-DD).
 * @param {Date|string} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date) => {
  if (!date) return '';
  
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString(undefined, options);
};
// Tambahkan fungsi helper yang sering digunakan di sini

