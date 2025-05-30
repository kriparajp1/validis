/**
 * Class-based implementation of OTP generation
 */
class OtpGeneratorSchema {
  constructor() {
    this.length = 6; // Default OTP length
    this.type = 'mixed'; // Default OTP type (mixed, numeric, alphabetic)
  }

  /**
   * Sets the length of the OTP to be generated.
   * @param {number} length - The length of the OTP
   * @returns {OtpGeneratorSchema} - The schema instance for chaining
   */
  setLength(length) {
    if (typeof length !== 'number' || length <= 0 || !Number.isInteger(length)) {
      throw new Error('Length must be a positive integer.');
    }
    
    this.length = length;
    return this;
  }

  /**
   * Sets the type of OTP to be generated.
   * @param {string} type - The type of OTP ('mixed', 'numeric', 'alphabetic')
   * @returns {OtpGeneratorSchema} - The schema instance for chaining
   */
  setType(type) {
    const validTypes = ['mixed', 'numeric', 'alphabetic'];
    if (!validTypes.includes(type)) {
      throw new Error(`Type must be one of: ${validTypes.join(', ')}.`);
    }
    
    this.type = type;
    return this;
  }

  /**
   * Generates a mixed alphanumeric OTP.
   * @returns {string} - The generated OTP
   */
  mixOtp() {
    this.type = 'mixed';
    return this.generate();
  }

  /**
   * Generates a numeric OTP.
   * @returns {string} - The generated OTP
   */
  numOtp() {
    this.type = 'numeric';
    return this.generate();
  }

  /**
   * Generates an alphabetic OTP.
   * @returns {string} - The generated OTP
   */
  alphaOtp() {
    this.type = 'alphabetic';
    return this.generate();
  }

  /**
   * Generates an OTP based on the current configuration.
   * @returns {string} - The generated OTP
   */
  generate() {
    let characters = '';
    let result = '';
    
    switch (this.type) {
      case 'mixed':
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        break;
      case 'numeric':
        characters = '0123456789';
        break;
      case 'alphabetic':
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        break;
    }
    
    const charactersLength = characters.length;
    for (let i = 0; i < this.length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
  }
}

module.exports = OtpGeneratorSchema;