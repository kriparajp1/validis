import Schema from './Schema.js';

/**
 * Boolean Schema for boolean validations
 */
class BooleanSchema extends Schema {
  constructor() {
    super();
    // Add base boolean type validation
    this.validations.push({
      code: 'boolean',
      fn: (value) => {
        return typeof value === 'boolean'
          ? { valid: true }
          : { valid: false, reason: 'Value must be a boolean' };
      }
    });
    this.errorMessages.push('Value must be a boolean');
  }

  /**
   * Validates boolean is true
   * @param {string} message - Custom error message
   * @returns {BooleanSchema} - The schema instance for chaining
   */
  true(message = 'Value must be true') {
    this.validations.push({
      code: 'boolean.true',
      fn: (value) => {
        return value === true
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates boolean is false
   * @param {string} message - Custom error message
   * @returns {BooleanSchema} - The schema instance for chaining
   */
  false(message = 'Value must be false') {
    this.validations.push({
      code: 'boolean.false',
      fn: (value) => {
        return value === false
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }
}

export default BooleanSchema;