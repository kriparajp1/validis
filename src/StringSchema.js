import Schema from './Schema.js';

/**
 * String Schema for string validations
 */
class StringSchema extends Schema {
  constructor() {
    super();
    // Add base string type validation
    this.validations.push({
      code: 'string',
      fn: (value) => {
        return typeof value === 'string'
          ? { valid: true }
          : { valid: false, reason: 'Value must be a string' };
      }
    });
    this.errorMessages.push('Value must be a string');
  }

  /**
   * Validates minimum string length
   * @param {number} length - Minimum length
   * @param {string} message - Custom error message
   * @returns {StringSchema} - The schema instance for chaining
   */
  min(length, message = `String must be at least ${length} characters`) {
    this.validations.push({
      code: 'string.min',
      fn: (value) => {
        return value.length >= length
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates maximum string length
   * @param {number} length - Maximum length
   * @param {string} message - Custom error message
   * @returns {StringSchema} - The schema instance for chaining
   */
  max(length, message = `String must be at most ${length} characters`) {
    this.validations.push({
      code: 'string.max',
      fn: (value) => {
        return value.length <= length
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates exact string length
   * @param {number} length - Exact length
   * @param {string} message - Custom error message
   * @returns {StringSchema} - The schema instance for chaining
   */
  length(length, message = `String must be exactly ${length} characters`) {
    this.validations.push({
      code: 'string.length',
      fn: (value) => {
        return value.length === length
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates email format
   * @param {string} message - Custom error message
   * @returns {StringSchema} - The schema instance for chaining
   */
  email(message = 'Invalid email format') {
    this.validations.push({
      code: 'string.email',
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
   * Validates URL format
   * @param {string} message - Custom error message
   * @returns {StringSchema} - The schema instance for chaining
   */
  url(message = 'Invalid URL format') {
    this.validations.push({
      code: 'string.url',
      fn: (value) => {
        try {
          new URL(value);
          return { valid: true };
        } catch {
          return { valid: false, reason: message };
        }
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates string matches a pattern
   * @param {RegExp} pattern - Regular expression to match
   * @param {string} message - Custom error message
   * @returns {StringSchema} - The schema instance for chaining
   */
  pattern(pattern, message = 'String does not match pattern') {
    this.validations.push({
      code: 'string.pattern',
      fn: (value) => {
        return pattern.test(value)
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates string has no whitespace
   * @param {string} message - Custom error message
   * @returns {StringSchema} - The schema instance for chaining
   */
  noWhitespace(message = 'String must not contain whitespace') {
    this.validations.push({
      code: 'string.noWhitespace',
      fn: (value) => {
        return !/\s/.test(value)
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Validates string is not empty
   * @param {string} message - Custom error message
   * @returns {StringSchema} - The schema instance for chaining
   */
  nonEmpty(message = 'String must not be empty') {
    this.validations.push({
      code: 'string.nonEmpty',
      fn: (value) => {
        return value.length > 0
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }
}

export default StringSchema;