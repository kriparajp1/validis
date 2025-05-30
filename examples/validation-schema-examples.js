/**
 * Examples of using the schema-based validation classes from the Validations folder
 */

const {
  BasicValidationsSchema,
  NumberValidationsSchema,
  PasswordValidationsSchema,
  TextCaseValidationsSchema,
  WhiteSpaceValidationSchema,
  OtpGeneratorSchema
} = require('../Validations');

// Example 1: Basic Validations
console.log('\n--- Basic Validations Example ---');
const basicValidator = new BasicValidationsSchema();

// Chain multiple validations
basicValidator.email().char(50);

// Validate an email
const emailResult = basicValidator.validate('example@example.com');
console.log('Email validation result:', emailResult);

// Validate an invalid email
const invalidEmailResult = basicValidator.validate('invalid-email');
console.log('Invalid email validation result:', invalidEmailResult);

// Example 2: Number Validations
console.log('\n--- Number Validations Example ---');
const numberValidator = new NumberValidationsSchema();

// Chain validations
numberValidator.num().range(10, 100);

// Validate a valid number
const numberResult = numberValidator.validate(50);
console.log('Number validation result:', numberResult);

// Validate an invalid number
const invalidNumberResult = numberValidator.validate(5);
console.log('Invalid number validation result:', invalidNumberResult);

// Example 3: Password Validations
console.log('\n--- Password Validations Example ---');
const passwordValidator = new PasswordValidationsSchema();

// Chain validations
passwordValidator.minLen(8).pass();

// Set comparison value for matching
passwordValidator.setCompareValue('Password123!');

// Add match validation
passwordValidator.match();

// Validate a valid password
const passwordResult = passwordValidator.validate('Password123!');
console.log('Password validation result:', passwordResult);

// Validate an invalid password
const invalidPasswordResult = passwordValidator.validate('weak');
console.log('Invalid password validation result:', invalidPasswordResult);

// Example 4: Text Case Validations
console.log('\n--- Text Case Validations Example ---');
const textCaseValidator = new TextCaseValidationsSchema();

// Chain validations
textCaseValidator.firstUpper().isUpper();

// Validate a valid text
const textResult = textCaseValidator.validate('HELLO');
console.log('Text case validation result:', textResult);

// Validate an invalid text
const invalidTextResult = textCaseValidator.validate('hello');
console.log('Invalid text case validation result:', invalidTextResult);

// Example 5: White Space Validations
console.log('\n--- White Space Validations Example ---');
const whiteSpaceValidator = new WhiteSpaceValidationSchema();

// Chain validations
whiteSpaceValidator.edgeSpace().blank();

// Validate a valid text
const whiteSpaceResult = whiteSpaceValidator.validate('Hello World');
console.log('White space validation result:', whiteSpaceResult);

// Validate an invalid text
const invalidWhiteSpaceResult = whiteSpaceValidator.validate(' Hello ');
console.log('Invalid white space validation result:', invalidWhiteSpaceResult);

// Example 6: OTP Generator
console.log('\n--- OTP Generator Example ---');
const otpGenerator = new OtpGeneratorSchema();

// Configure OTP generator
otpGenerator.setLength(8).setType('mixed');

// Generate mixed OTP
const mixedOtp = otpGenerator.generate();
console.log('Mixed OTP:', mixedOtp);

// Generate numeric OTP
otpGenerator.setType('numeric');
const numericOtp = otpGenerator.generate();
console.log('Numeric OTP:', numericOtp);

// Generate alphabetic OTP
otpGenerator.setType('alphabetic');
const alphabeticOtp = otpGenerator.generate();
console.log('Alphabetic OTP:', alphabeticOtp);

// Using shorthand methods
const mixOtp = otpGenerator.setLength(6).mixOtp();
console.log('Mixed OTP (shorthand):', mixOtp);

const numOtp = otpGenerator.numOtp();
console.log('Numeric OTP (shorthand):', numOtp);

const alphaOtp = otpGenerator.alphaOtp();
console.log('Alphabetic OTP (shorthand):', alphaOtp);