
  /**
   * Checks for no edge spaces.
   * @param {string} str - String to validate.
   * @returns {Object} - { valid: boolean, reason?: string }
   */
  const edgeSpace = (str) => (/^\s|\s$/.test(str) ? { valid: false, reason: "No edge spaces allowed." } : { valid: true });
  
  /**
   * Checks for no spaces.
   * @param {string} str - String to validate.
   * @returns {Object} - { valid: boolean, reason?: string }
   */
  const noSpaces = (str) => (/\s/.test(str) ? { valid: false, reason: "No spaces allowed." } : { valid: true });
  
  /**
   * Checks if input is not blank (all spaces).
   * @param {string} str - String to validate.
   * @returns {Object} - { valid: boolean, reason?: string }
   */
  const blank = (str) => (/^\s*$/.test(str) ? { valid: false, reason: "Cannot be blank." } : { valid: true });

  module.exports = {
    edgeSpace,
    noSpaces,
    blank,
  };