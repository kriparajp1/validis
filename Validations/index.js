/**
 * Index file for schema-based validation classes
 */

// Import with new shorter names
const BasicSchema = require('./BasicSchema');
const NumSchema = require('./NumSchema');
const PassSchema = require('./PassSchema');
const TextSchema = require('./TextSchema');
const SpaceSchema = require('./SpaceSchema');
const OtpSchema = require('./OtpSchema');

// Export all schema classes with both old and new names for backward compatibility
module.exports = {
  // New shorter names
  BasicSchema,
  NumSchema,
  PassSchema,
  TextSchema,
  SpaceSchema,
  OtpSchema,
  
  // Old names for backward compatibility
  BasicValidationsSchema: BasicSchema,
  NumberValidationsSchema: NumSchema,
  PasswordValidationsSchema: PassSchema,
  TextCaseValidationsSchema: TextSchema,
  WhiteSpaceValidationSchema: SpaceSchema,
  OtpGeneratorSchema: OtpSchema
};