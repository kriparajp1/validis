/**
 * Class-based implementation of basic validations
 */
class BasicValidationsSchema {
  constructor() {
    this.validations = [];
    this.errorMessages = [];
  }

  /**
   * Validates an email address using a regular expression.
   * @param {string} message - Custom error message
   * @returns {BasicValidationsSchema} - The schema instance for chaining
   */
  email(message = 'Invalid email format.') {
    this.validations.push({
      code: 'email',
      fn: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value)
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates a phone number using an improved regular expression.
   * @param {string} message - Custom error message
   * @returns {BasicValidationsSchema} - The schema instance for chaining
   */
  phone(message = 'Invalid phone number format.') {
    this.validations.push({
      code: 'phone',
      fn: (value) => {
        const phoneRegex = /^(\+?\d{1,4})?(\d{4,15})$/;
        return phoneRegex.test(value)
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates character limit.
   * @param {number} limit - Character limit
   * @param {string} message - Custom error message
   * @returns {BasicValidationsSchema} - The schema instance for chaining
   */
  char(limit, message = 'Input exceeds character limit.') {
    if (typeof limit !== 'number' || limit <= 0) {
      throw new Error('Limit must be a positive number.');
    }
    
    this.validations.push({
      code: 'char',
      fn: (value) => {
        return value.length <= limit
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

module.exports = BasicValidationsSchema;