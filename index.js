const basicValidations = require('./Validations/basicValidations');
const passwordValidations = require('./Validations/passwordValidations');
const numberValidations = require('./Validations/numberValidations');
const textCaseValidations = require('./Validations/textCaseValidations');
const whiteSpaceValidations = require("./Validations/whiteSpaceValidation");


module.exports = {
  ...basicValidations,
  ...passwordValidations,
  ...numberValidations,
  ...textCaseValidations,
  ...whiteSpaceValidations
};