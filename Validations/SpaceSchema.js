/**
 * Class-based implementation of whitespace validations
 */
class WhiteSpaceValidationSchema {
  constructor() {
    this.validations = [];
    this.errorMessages = [];
  }

  /**
   * Validates if a string has no leading or trailing whitespace.
   * @param {string} message - Custom error message
   * @returns {WhiteSpaceValidationSchema} - The schema instance for chaining
   */
  edgeSpace(message = 'String must not have leading or trailing whitespace.') {
    this.validations.push({
      code: 'edgeSpace',
      fn: (value) => {
        // Check if it's a string
        if (typeof value !== 'string') {
          return { valid: false, reason: 'Value must be a string' };
        }
        
        return value.trim() === value
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates if a string has no whitespace characters.
   * @param {string} message - Custom error message
   * @returns {WhiteSpaceValidationSchema} - The schema instance for chaining
   */
  noSpaces(message = 'String must not contain any whitespace.') {
    this.validations.push({
      code: 'noSpaces',
      fn: (value) => {
        // Check if it's a string
        if (typeof value !== 'string') {
          return { valid: false, reason: 'Value must be a string' };
        }
        
        return !/\s/.test(value)
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates if a string is not blank (empty or only whitespace).
   * @param {string} message - Custom error message
   * @returns {WhiteSpaceValidationSchema} - The schema instance for chaining
   */
  blank(message = 'String must not be blank.') {
    this.validations.push({
      code: 'blank',
      fn: (value) => {
        // Check if it's a string
        if (typeof value !== 'string') {
          return { valid: false, reason: 'Value must be a string' };
        }
        
        return value.trim().length > 0
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates a value against all validations
   * @param {any} value - The value to validate
   * @returns {Object} - Validation result with errors if any
   */
  validate(value) {
    const errors = [];
    let isValid = true;

    for (let i = 0; i < this.validations.length; i++) {
      const validation = this.validations[i];
      const result = validation.fn(value);
      
      if (!result.valid) {
        isValid = false;
        errors.push({
          code: validation.code,
          message: result.reason || this.errorMessages[i] || 'Validation failed'
        });
      }
    }

    if (isValid) {
      return { success: true, data: value };
    } else {
      return { success: false, errors };
    }
  }
}

module.exports = WhiteSpaceValidationSchema;