/**
 * Base Schema class for validation
 */
class Schema {
  constructor() {
    this.validations = [];
    this.errorMessages = [];
    this._optional = false;
  }

  /**
   * Validates a value against all validations
   * @param {any} value - The value to validate
   * @returns {Object} - Validation result with errors if any
   */
  parse(value) {
    // Handle optional values
    if (this._optional && (value === undefined || value === null)) {
      return { success: true, data: value };
    }

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

  /**
   * Makes the schema optional
   * @returns {Schema} - The schema instance for chaining
   */
  optional() {
    this._optional = true;
    return this;
  }

  /**
   * Creates a string schema
   * @returns {StringSchema} - A new string schema
   */
  static string() {
    return new StringSchema();
  }

  /**
   * Creates a number schema
   * @returns {NumberSchema} - A new number schema
   */
  static number() {
    return new NumberSchema();
  }

  /**
   * Creates a boolean schema
   * @returns {BooleanSchema} - A new boolean schema
   */
  static boolean() {
    return new BooleanSchema();
  }

  /**
   * Creates an object schema
   * @param {Object} shape - The shape of the object
   * @returns {ObjectSchema} - A new object schema
   */
  static object(shape) {
    return new ObjectSchema(shape);
  }

  /**
   * Creates an array schema
   * @param {Schema} itemSchema - Schema for array items
   * @returns {ArraySchema} - A new array schema
   */
  static array(itemSchema) {
    return new ArraySchema(itemSchema);
  }

  /**
   * Adds a custom validation
   * @param {Function} fn - Validation function
   * @param {string} message - Error message
   * @returns {Schema} - The schema instance for chaining
   */
  custom(fn, message = 'Custom validation failed') {
    this.validations.push({
      code: 'custom',
      fn: (value) => {
        const result = fn(value);
        return typeof result === 'boolean' 
          ? { valid: result, reason: message }
          : result;
      }
    });
    this.errorMessages.push(message);
    return this;
  }
}

// Import all schema types
import StringSchema from './StringSchema.js';
import NumberSchema from './NumberSchema.js';
import BooleanSchema from './BooleanSchema.js';
import ObjectSchema from './ObjectSchema.js';
import ArraySchema from './ArraySchema.js';

// Export all schema types
export { StringSchema, NumberSchema, BooleanSchema, ObjectSchema, ArraySchema };
export default Schema;