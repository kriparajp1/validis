/**
 * Class-based implementation of password validations
 */
class PasswordValidationsSchema {
  constructor() {
    this.validations = [];
    this.errorMessages = [];
    this._compareValue = null;
  }

  /**
   * Validates password strength using a regular expression.
   * @param {string} message - Custom error message
   * @returns {PasswordValidationsSchema} - The schema instance for chaining
   */
  pass(message = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.') {
    this.validations.push({
      code: 'pass',
      fn: (value) => {
        // Check if it's a string
        if (typeof value !== 'string') {
          return { valid: false, reason: 'Password must be a string' };
        }
        
        // Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(value)
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates minimum password length.
   * @param {number} length - Minimum length
   * @param {string} message - Custom error message
   * @returns {PasswordValidationsSchema} - The schema instance for chaining
   */
  minLen(length, message = `Password must be at least ${length} characters long.`) {
    if (typeof length !== 'number' || length <= 0) {
      throw new Error('Length must be a positive number.');
    }
    
    this.validations.push({
      code: 'minLen',
      fn: (value) => {
        // Check if it's a string
        if (typeof value !== 'string') {
          return { valid: false, reason: 'Password must be a string' };
        }
        
        return value.length >= length
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Sets a comparison value for password matching.
   * @param {string} value - The value to compare with
   * @returns {PasswordValidationsSchema} - The schema instance for chaining
   */
  setCompareValue(value) {
    this._compareValue = value;
    return this;
  }

  /**
   * Validates if password matches the comparison value.
   * @param {string} message - Custom error message
   * @returns {PasswordValidationsSchema} - The schema instance for chaining
   */
  match(message = 'Passwords do not match.') {
    this.validations.push({
      code: 'match',
      fn: (value) => {
        // Check if it's a string
        if (typeof value !== 'string') {
          return { valid: false, reason: 'Password must be a string' };
        }
        
        // Check if comparison value is set
        if (this._compareValue === null) {
          return { valid: false, reason: 'No comparison value set. Use setCompareValue() first.' };
        }
        
        return value === this._compareValue
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

module.exports = PasswordValidationsSchema;