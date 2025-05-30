/**
 * Index file for schema-based validation classes
 */

const BasicValidationsSchema = require('./BasicValidationsSchema');
const NumberValidationsSchema = require('./NumberValidationsSchema');
const PasswordValidationsSchema = require('./PasswordValidationsSchema');
const TextCaseValidationsSchema = require('./TextCaseValidationsSchema');
const WhiteSpaceValidationSchema = require('./WhiteSpaceValidationSchema');
const OtpGeneratorSchema = require('./OtpGeneratorSchema');

// Export all schema classes
module.exports = {
  BasicValidationsSchema,
  NumberValidationsSchema,
  PasswordValidationsSchema,
  TextCaseValidationsSchema,
  WhiteSpaceValidationSchema,
  OtpGeneratorSchema
};