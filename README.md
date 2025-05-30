# Validis

A comprehensive validation library for JavaScript with a user-friendly, chainable API.

## Installation

```bash
npm install validis
```

## Usage

Validis provides two APIs for validation:

1. **Schema-based API** -  chainable API for complex validations
2. **Legacy Function API** - Simple function-based validations
3. **Validation Schema Classes** - Class-based implementations of validation modules

### Schema-based API

```javascript
const { Schema } = require('validis');

// String validation
const stringSchema = Schema.string().min(3).max(10).email();
const result = stringSchema.parse('test@example.com');

// Number validation
const numberSchema = Schema.number().min(5).max(100).positive();
const numResult = numberSchema.parse(42);

// Boolean validation
const boolSchema = Schema.boolean();
const boolResult = boolSchema.parse(true);

// Object validation
const userSchema = Schema.object({
  username: Schema.string().min(3).max(20),
  email: Schema.string().email(),
  age: Schema.number().min(18).optional()
});
const userResult = userSchema.parse({
  username: 'johndoe',
  email: 'john@example.com',
  age: 25
});

// Array validation
const arraySchema = Schema.array(Schema.string()).min(1).max(5);
const arrayResult = arraySchema.parse(['apple', 'banana', 'cherry']);
```

### Validation Schema Classes

Validis now provides class-based implementations of all validation modules with a chainable API:

```javascript
const { 
  BasicValidationsSchema,
  NumberValidationsSchema,
  PasswordValidationsSchema,
  TextCaseValidationsSchema,
  WhiteSpaceValidationSchema,
  OtpGeneratorSchema 
} = require('validis');

// Basic validations
const basicValidator = new BasicValidationsSchema();
basicValidator.email().char(50);
const emailResult = basicValidator.validate('example@example.com');

// Number validations
const numberValidator = new NumberValidationsSchema();
numberValidator.num().range(10, 100);
const numberResult = numberValidator.validate(50);

// Password validations
const passwordValidator = new PasswordValidationsSchema();
passwordValidator.minLen(8).pass();
passwordValidator.setCompareValue('Password123!');
passwordValidator.match();
const passwordResult = passwordValidator.validate('Password123!');

// Text case validations
const textCaseValidator = new TextCaseValidationsSchema();
textCaseValidator.firstUpper().isUpper();
const textResult = textCaseValidator.validate('HELLO');

// White space validations
const whiteSpaceValidator = new WhiteSpaceValidationSchema();
whiteSpaceValidator.edgeSpace().blank();
const whiteSpaceResult = whiteSpaceValidator.validate('Hello World');

// OTP generator
const otpGenerator = new OtpGeneratorSchema();
otpGenerator.setLength(8).setType('mixed');
const mixedOtp = otpGenerator.generate();
// Or use shorthand methods
const numOtp = otpGenerator.numOtp();
const alphaOtp = otpGenerator.alphaOtp();
```

### Legacy Function API

```javascript
const validis = require('validis');

// Basic validations
validis.email('test@example.com'); // Returns { valid: true }
validis.phone('1234567890'); // Returns { valid: true }
validis.char('Hello', 10); // Returns { valid: true }

// Password validations
validis.pass('StrongP@ss123'); // Returns { valid: true }
validis.minLen('password', 6); // Returns { valid: true }
validis.match('password', 'password'); // Returns { valid: true }

// Number validations
validis.num(42); // Returns { valid: true }
validis.range(42, 1, 100); // Returns { valid: true }

// Text case validations
validis.firstUpper('Hello'); // Returns { valid: true }
validis.isLower('hello'); // Returns { valid: true }
validis.isUpper('HELLO'); // Returns { valid: true }

// White space validations
validis.edgeSpace('Hello'); // Returns { valid: true }
validis.noSpaces('Hello'); // Returns { valid: false, reason: 'String contains whitespace' }
validis.blank('Hello'); // Returns { valid: true }

// OTP generation
validis.mixOtp(6); // Returns a 6-digit alphanumeric OTP
validis.numOtp(4); // Returns a 4-digit numeric OTP
validis.alphaOtp(8); // Returns an 8-character alphabetic OTP
```

## Return Values

### Schema-based API

The `parse()` method returns an object with the following structure:

```javascript
// Success case
{
  success: true,
  data: value // The validated value
}

// Error case
{
  success: false,
  errors: [
    {
      code: 'validation.code',
      message: 'Error message'
    },
    // More errors if multiple validations failed
  ]
}
```

### Validation Schema Classes

The `validate()` method returns an object with the same structure as the Schema-based API:

```javascript
// Success case
{
  success: true,
  data: value // The validated value
}

// Error case
{
  success: false,
  errors: [
    {
      code: 'validation.code',
      message: 'Error message'
    },
    // More errors if multiple validations failed
  ]
}
```

### Legacy Function API

Each validation function returns an object with the following structure:

```javascript
// Success case
{
  valid: true
}

// Error case
{
  valid: false,
  reason: 'Error message'
}
```

## Available Validations

### String Schema
- `min(length)` - Minimum string length
- `max(length)` - Maximum string length
- `length(length)` - Exact string length
- `email()` - Email format validation
- `url()` - URL format validation
- `pattern(regex)` - Custom regex pattern validation
- `noWhitespace()` - No whitespace validation
- `nonEmpty()` - Non-empty string validation

### Number Schema
- `min(value)` - Minimum value
- `max(value)` - Maximum value
- `positive()` - Positive number validation
- `negative()` - Negative number validation
- `integer()` - Integer validation
- `range(min, max)` - Range validation

### Boolean Schema
- `true()` - Must be true
- `false()` - Must be false

### Object Schema
- `required()` - Required fields validation
- `strict()` - No additional properties allowed

### Array Schema
- `min(length)` - Minimum array length
- `max(length)` - Maximum array length
- `length(length)` - Exact array length
- `unique()` - Unique items validation

### Basic Validations Schema
- `email()` - Email format validation
- `phone()` - Phone number format validation
- `char(limit)` - Character limit validation

### Number Validations Schema
- `num()` - Positive number validation
- `range(min, max)` - Range validation

### Password Validations Schema
- `pass()` - Password strength validation
- `minLen(length)` - Minimum length validation
- `setCompareValue(value)` - Set comparison value
- `match()` - Password match validation

### Text Case Validations Schema
- `firstUpper()` - First letter uppercase validation
- `isLower()` - Lowercase validation
- `isUpper()` - Uppercase validation

### White Space Validation Schema
- `edgeSpace()` - No leading/trailing whitespace validation
- `noSpaces()` - No whitespace validation
- `blank()` - Non-blank validation

### OTP Generator Schema
- `setLength(length)` - Set OTP length
- `setType(type)` - Set OTP type ('mixed', 'numeric', 'alphabetic')
- `generate()` - Generate OTP
- `mixOtp()` - Generate mixed alphanumeric OTP
- `numOtp()` - Generate numeric OTP
- `alphaOtp()` - Generate alphabetic OTP

## License

MIT
