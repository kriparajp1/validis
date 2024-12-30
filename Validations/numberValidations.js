/**
 * Validates if the input is a positive number.
 * @param {number} number - Number to validate.
 * @returns {Object} - Returns an object with validation result and reason if invalid.
 */
const num = (number) => {
    return typeof number === "number" && number > 0 ? { valid: true } : { valid: false, reason: "Number must be positive." };
  };
  
  /**
   * Validates if a number is within a specified range.
   * @param {number} number - Number to validate.
   * @param {number} min - Minimum value of the range.
   * @param {number} max - Maximum value of the range.
   * @returns {Object} - Returns an object with validation result and reason if invalid.
   */
  const range = (number, min, max) => {
    if (typeof min !== "number" || typeof max !== "number" || min >= max) return { valid: false, reason: "Invalid range. Ensure min is less than max." };
    return number >= min && number <= max ? { valid: true } : { valid: false, reason: "Number is out of range." };
  };
  
  module.exports = { num, range };