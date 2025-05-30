/**
 * Class-based implementation of text case validations
 */
class TextCaseValidationsSchema {
  constructor() {
    this.validations = [];
    this.errorMessages = [];
  }

  /**
   * Validates if the first letter of a string is uppercase.
   * @param {string} message - Custom error message
   * @returns {TextCaseValidationsSchema} - The schema instance for chaining
   */
  firstUpper(message = 'First letter must be uppercase.') {
    this.validations.push({
      code: 'firstUpper',
      fn: (value) => {
        // Check if it's a string
        if (typeof value !== 'string') {
          return { valid: false, reason: 'Value must be a string' };
        }
        
        // Check if string is empty
        if (value.length === 0) {
          return { valid: false, reason: 'String cannot be empty' };
        }
        
        const firstChar = value.charAt(0);
        return firstChar === firstChar.toUpperCase() && firstChar !== firstChar.toLowerCase()
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates if a string is fully lowercase.
   * @param {string} message - Custom error message
   * @returns {TextCaseValidationsSchema} - The schema instance for chaining
   */
  isLower(message = 'String must be lowercase.') {
    this.validations.push({
      code: 'isLower',
      fn: (value) => {
        // Check if it's a string
        if (typeof value !== 'string') {
          return { valid: false, reason: 'Value must be a string' };
        }
        
        return value === value.toLowerCase()
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates if a string is fully uppercase.
   * @param {string} message - Custom error message
   * @returns {TextCaseValidationsSchema} - The schema instance for chaining
   */
  isUpper(message = 'String must be uppercase.') {
    this.validations.push({
      code: 'isUpper',
      fn: (value) => {
        // Check if it's a string
        if (typeof value !== 'string') {
          return { valid: false, reason: 'Value must be a string' };
        }
        
        return value === value.toUpperCase()
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

module.exports = TextCaseValidationsSchema;