/**
 * Validates an email address using a regular expression.
 * @param {string} email - Email to validate.
 * @returns {Object} - Returns an object with validation result and reason if invalid.
 */
const email = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? { valid: true } : { valid: false, reason: "Invalid email format." };
  };
  
 /**
 * Validates a phone number using an improved regular expression.
 * Supports a broader range of valid numbers, including short codes.
 * @param {string} phone - Phone number to validate.
 * @returns {Object} - Returns an object with validation result and reason if invalid.
 */
const phone = (phone) => {
  const phoneRegex = /^(\+?\d{1,4})?(\d{4,15})$/; // Allows country codes + national formats
  return phoneRegex.test(phone)
    ? { valid: true }
    : { valid: false, reason: "Invalid phone number format." };
};
  
  /**
   * Validates character limit.
   * @param {string} input - Input string to check.
   * @param {number} limit - Character limit.
   * @returns {Object} - Returns an object with validation result and reason if invalid.
   */
  const char = (input, limit) => {
    if (typeof limit !== "number" || limit <= 0) return { valid: false, reason: "Limit must be a positive number." };
    return input.length <= limit ? { valid: true } : { valid: false, reason: "Input exceeds character limit." };
  };
  
  module.exports = { email, phone, char };