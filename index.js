// Import the Schema class and all schema types
import Schema, { StringSchema, NumberSchema, BooleanSchema, ObjectSchema, ArraySchema } from './src/Schema.js';

// Import legacy validation functions for backward compatibility
const basicValidations = require('./Validations/basicValidations');
const passwordValidations = require('./Validations/passwordValidations');
const numberValidations = require('./Validations/numberValidations');
const textCaseValidations = require('./Validations/textCaseValidations');
const whiteSpaceValidations = require('./Validations/whiteSpaceValidation');
const otpGenerator = require('./Validations/otpGenerator');

// Import schema-based validation classes from Validations folder
const {
  // New shorter names
  BasicSchema,
  NumSchema,
  PassSchema,
  TextSchema,
  SpaceSchema,
  OtpSchema,
  
  // Old names for backward compatibility
  BasicValidationsSchema,
  NumberValidationsSchema,
  PasswordValidationsSchema,
  TextCaseValidationsSchema,
  WhiteSpaceValidationSchema,
  OtpGeneratorSchema
} = require('./Validations');

// Export both new schema-based API and legacy functions
module.exports = {
  // New Zod-like schema API
  Schema,
  StringSchema,
  NumberSchema,
  BooleanSchema,
  ObjectSchema,
  ArraySchema,
  
  // Schema-based validation classes from Validations folder (new shorter names)
  BasicSchema,
  NumSchema,
  PassSchema,
  TextSchema,
  SpaceSchema,
  OtpSchema,
  
  // Schema-based validation classes from Validations folder (old names for backward compatibility)
  BasicValidationsSchema,
  NumberValidationsSchema,
  PasswordValidationsSchema,
  TextCaseValidationsSchema,
  WhiteSpaceValidationSchema,
  OtpGeneratorSchema,
  
  // Legacy validation functions for backward compatibility
  ...basicValidations,
  ...passwordValidations,
  ...numberValidations,
  ...textCaseValidations,
  ...whiteSpaceValidations,
  ...otpGenerator
};