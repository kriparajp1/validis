const basicValidations = require('./Validations/basicValidations');
const passwordValidations = require('./Validations/passwordValidations');
const numberValidations = require('./Validations/numberValidations');
const textCaseValidations = require('./Validations/textCaseValidations');
const whiteSpaceValidations = require("./Validations/whiteSpaceValidation");
const MatchValidation = require("./Validations/MatchValidation");

module.exports = {
  ...basicValidations,
  ...passwordValidations,
  ...numberValidations,
  ...textCaseValidations,
  ...whiteSpaceValidations,
  ...MatchValidation
};