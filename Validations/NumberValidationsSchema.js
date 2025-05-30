/**
 * Class-based implementation of number validations
 */
class NumberValidationsSchema {
  constructor() {
    this.validations = [];
    this.errorMessages = [];
  }

  /**
   * Validates if a number is positive.
   * @param {string} message - Custom error message
   * @returns {NumberValidationsSchema} - The schema instance for chaining
   */
  num(message = 'Number must be positive.') {
    this.validations.push({
      code: 'num',
      fn: (value) => {
        // First check if it's a valid number
        if (typeof value !== 'number' || isNaN(value)) {
          return { valid: false, reason: 'Value must be a number' };
        }
        
        return value > 0
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates if a number is within a specified range.
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @param {string} message - Custom error message
   * @returns {NumberValidationsSchema} - The schema instance for chaining
   */
  range(min, max, message = `Number must be between ${min} and ${max}.`) {
    if (typeof min !== 'number' || typeof max !== 'number') {
      throw new Error('Min and max must be numbers.');
    }
    
    if (min >= max) {
      throw new Error('Min must be less than max.');
    }
    
    this.validations.push({
      code: 'range',
      fn: (value) => {
        // First check if it's a valid number
        if (typeof value !== 'number' || isNaN(value)) {
          return { valid: false, reason: 'Value must be a number' };
        }
        
        return value >= min && value <= max
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

module.exports = NumberValidationsSchema;