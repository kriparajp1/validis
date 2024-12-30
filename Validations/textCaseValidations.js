/**
 * Validates if the first letter of a string is uppercase.
 * @param {string} input - Input string to validate.
 * @returns {Object} - Returns an object with validation result and reason if invalid.
 */
const firstUpper = (input) => {
    return /^[A-Z]/.test(input) ? { valid: true } : { valid: false, reason: "First letter is not uppercase." };
  };
  
  /**
   * Validates if the string is fully lowercase.
   * @param {string} input - Input string to validate.
   * @returns {Object} - Returns an object with validation result and reason if invalid.
   */
  const isLower = (input) => {
    return /^[a-z]+$/.test(input) ? { valid: true } : { valid: false, reason: "String is not fully lowercase." };
  };
  
  /**
   * Validates if the string is fully uppercase.
   * @param {string} input - Input string to validate.
   * @returns {Object} - Returns an object with validation result and reason if invalid.
   */
  const isUpper = (input) => {
    return /^[A-Z]+$/.test(input) ? { valid: true } : { valid: false, reason: "String is not fully uppercase." };
  };
  
  module.exports = { firstUpper, isLower, isUpper };