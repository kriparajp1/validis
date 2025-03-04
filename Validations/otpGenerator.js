/**
 * Generates a random OTP based on the type specified.
 * @param {number} length - The length of the OTP.
 * @returns {string} - Generated OTP.
 */

// Generate Mixed OTP (Alphabets + Numbers)
const mixOtp = (length) => genOtp(length, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");

// Generate Numeric OTP (Only Numbers)
const numOtp = (length) => genOtp(length, "0123456789");

// Generate Alphabetic OTP (Only Letters)
const alphaOtp = (length) => genOtp(length, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");

// Utility function to generate OTP from a given character set
const genOtp = (length, chars) => Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");

// Export the functions
module.exports = { mixOtp, numOtp, alphaOtp };
