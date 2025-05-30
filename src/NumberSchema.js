import Schema from './Schema.js';

/**
 * Number Schema for number validations
 */
class NumberSchema extends Schema {
  constructor() {
    super();
    // Add base number type validation
    this.validations.push({
      code: 'number',
      fn: (value) => {
        return typeof value === 'number' && !isNaN(value)
          ? { valid: true }
          : { valid: false, reason: 'Value must be a number' };
      }
    });
    this.errorMessages.push('Value must be a number');
  }

  /**
   * Validates minimum value
   * @param {number} min - Minimum value
   * @param {string} message - Custom error message
   * @returns {NumberSchema} - The schema instance for chaining
   */
  min(min, message = `Number must be at least ${min}`) {
    this.validations.push({
      code: 'number.min',
      fn: (value) => {
        return value >= min
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates maximum value
   * @param {number} max - Maximum value
   * @param {string} message - Custom error message
   * @returns {NumberSchema} - The schema instance for chaining
   */
  max(max, message = `Number must be at most ${max}`) {
    this.validations.push({
      code: 'number.max',
      fn: (value) => {
        return value <= max
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates number is positive
   * @param {string} message - Custom error message
   * @returns {NumberSchema} - The schema instance for chaining
   */
  positive(message = 'Number must be positive') {
    this.validations.push({
      code: 'number.positive',
      fn: (value) => {
        return value > 0
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates number is negative
   * @param {string} message - Custom error message
   * @returns {NumberSchema} - The schema instance for chaining
   */
  negative(message = 'Number must be negative') {
    this.validations.push({
      code: 'number.negative',
      fn: (value) => {
        return value < 0
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates number is an integer
   * @param {string} message - Custom error message
   * @returns {NumberSchema} - The schema instance for chaining
   */
  integer(message = 'Number must be an integer') {
    this.validations.push({
      code: 'number.integer',
      fn: (value) => {
        return Number.isInteger(value)
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates number is within a range
   * @param {number} min - Minimum value
   * @param {number} max - Maximum value
   * @param {string} message - Custom error message
   * @returns {NumberSchema} - The schema instance for chaining
   */
  range(min, max, message = `Number must be between ${min} and ${max}`) {
    this.validations.push({
      code: 'number.range',
      fn: (value) => {
        return value >= min && value <= max
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }
}

export default NumberSchema;