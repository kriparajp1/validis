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

module.exports = { match };