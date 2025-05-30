import Schema from './Schema.js';

/**
 * Object Schema for object validations
 */
class ObjectSchema extends Schema {
  constructor(shape = {}) {
    super();
    this.shape = shape;
    
    // Add base object type validation
    this.validations.push({
      code: 'object',
      fn: (value) => {
        return typeof value === 'object' && value !== null && !Array.isArray(value)
          ? { valid: true }
          : { valid: false, reason: 'Value must be an object' };
      }
    });
    this.errorMessages.push('Value must be an object');
  }

  /**
   * Validates an object against the schema shape
   * @param {Object} value - The object to validate
   * @returns {Object} - Validation result with errors if any
   */
  parse(value) {
    // First validate that it's an object
    const baseResult = super.parse(value);
    if (!baseResult.success) {
      return baseResult;
    }

    // If no shape defined, just return the base validation
    if (Object.keys(this.shape).length === 0) {
      return baseResult;
    }

    // Validate each property against its schema
    const errors = [];
    const result = { success: true, data: {} };

    for (const key in this.shape) {
      const schema = this.shape[key];
      const propertyValue = value[key];
      
      // Skip validation for undefined values if the schema is optional
      if ((propertyValue === undefined || propertyValue === null) && schema._optional) {
        continue;
      }
      
      const propertyResult = schema.parse(propertyValue);
      
      if (propertyResult.success) {
        result.data[key] = propertyResult.data;
      } else {
        result.success = false;
        errors.push({
          path: key,
          errors: propertyResult.errors
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
   * Requires specific keys to be present
   * @param {Array<string>} keys - Keys that must be present
   * @param {string} message - Custom error message
   * @returns {ObjectSchema} - The schema instance for chaining
   */
  required(keys, message = 'Required key is missing') {
    this.validations.push({
      code: 'object.required',
      fn: (value) => {
        for (const key of keys) {
          if (!(key in value)) {
            return { valid: false, reason: `${message}: ${key}` };
          }
        }
        return { valid: true };
      }
    });
    this.errorMessages.push(message);
    return this;
  }

  /**
   * Forbids additional properties not defined in the schema
   * @param {string} message - Custom error message
   * @returns {ObjectSchema} - The schema instance for chaining
   */
  strict(message = 'Unknown properties are not allowed') {
    this.validations.push({
      code: 'object.strict',
      fn: (value) => {
        const extraKeys = Object.keys(value).filter(key => !(key in this.shape));
        return extraKeys.length === 0
          ? { valid: true }
          : { valid: false, reason: `${message}: ${extraKeys.join(', ')}` };
      }
    });
    this.errorMessages.push(message);
    return this;
  }
}

export default ObjectSchema;