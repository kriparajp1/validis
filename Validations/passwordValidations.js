/**
 * Validates if a password contains uppercase, lowercase, symbols, and numbers.
 * @param {string} password - Password to validate.
 * @returns {Object} - Returns an object with validation result and reasons if invalid.
 */
const pass = (password) => {
    const reasons = [];
    if (!/[A-Z]/.test(password)) reasons.push("Uppercase letter missing.");
    if (!/[a-z]/.test(password)) reasons.push("Lowercase letter missing.");
    if (!/\d/.test(password)) reasons.push("Number missing.");
    if (!/[@$!%*?&#]/.test(password)) reasons.push("Symbol missing.");
  
    return reasons.length === 0 ? { valid: true } : { valid: false, reasons };
  };
  
  /**
   * Validates the minimum length of a string.
   * @param {string} input - Input string to check.
   * @param {number} minLength - Minimum length required.
   * @returns {Object} - Returns an object with validation result and reason if invalid.
   */
  const minLen = (input, minLength) => {
    if (typeof minLength !== "number" || minLength <= 0) return { valid: false, reason: "Minimum length must be a positive number." };
    return input.length >= minLength ? { valid: true } : { valid: false, reason: "Input does not meet minimum length." };
  };

    /**
   * Checks for password and confirm password match.
   * @param {string} str - String to validate.
   * @returns {Object} - { valid: boolean, reason?: string }
   */
function match(input1, input2) {
  if (input1 === input2) {
      return { valid: true };
  } else {
      return { valid: false, reason: "Password does not match!" };
  }
}
  
  module.exports = { pass, minLen,match };