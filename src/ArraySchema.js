import Schema from './Schema.js';

/**
 * Array Schema for array validations
 */
class ArraySchema extends Schema {
  constructor(itemSchema) {
    super();
    this.itemSchema = itemSchema;
    
    // Add base array type validation
    this.validations.push({
      code: 'array',
      fn: (value) => {
        return Array.isArray(value)
          ? { valid: true }
          : { valid: false, reason: 'Value must be an array' };
      }
    });
    this.errorMessages.push('Value must be an array');
  }

  /**
   * Validates an array against the schema
   * @param {Array} value - The array to validate
   * @returns {Object} - Validation result with errors if any
   */
  parse(value) {
    // First validate that it's an array
    const baseResult = super.parse(value);
    if (!baseResult.success) {
      return baseResult;
    }

    // If no item schema defined, just return the base validation
    if (!this.itemSchema) {
      return baseResult;
    }

    // Validate each item against the item schema
    const errors = [];
    const result = { success: true, data: [] };

    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const itemResult = this.itemSchema.parse(item);
      
      if (itemResult.success) {
        result.data.push(itemResult.data);
      } else {
        result.success = false;
        errors.push({
          index: i,
          errors: itemResult.errors
        });
      }
    }

    if (!result.success) {
      result.errors = errors;
      delete result.data;
    }

    return result;
  }

  /**
   * Validates minimum array length
   * @param {number} length - Minimum length
   * @param {string} message - Custom error message
   * @returns {ArraySchema} - The schema instance for chaining
   */
  min(length, message = `Array must contain at least ${length} items`) {
    this.validations.push({
      code: 'array.min',
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
   * Validates maximum array length
   * @param {number} length - Maximum length
   * @param {string} message - Custom error message
   * @returns {ArraySchema} - The schema instance for chaining
   */
  max(length, message = `Array must contain at most ${length} items`) {
    this.validations.push({
      code: 'array.max',
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
   * Validates exact array length
   * @param {number} length - Exact length
   * @param {string} message - Custom error message
   * @returns {ArraySchema} - The schema instance for chaining
   */
  length(length, message = `Array must contain exactly ${length} items`) {
    this.validations.push({
      code: 'array.length',
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
   * Validates array has no duplicate items
   * @param {string} message - Custom error message
   * @returns {ArraySchema} - The schema instance for chaining
   */
  unique(message = 'Array must not contain duplicate items') {
    this.validations.push({
      code: 'array.unique',
      fn: (value) => {
        const uniqueItems = new Set(value.map(item => JSON.stringify(item)));
        return uniqueItems.size === value.length
          ? { valid: true }
          : { valid: false, reason: message };
      }
    });
    this.errorMessages.push(message);
    return this;
  }
}

export default ArraySchema;