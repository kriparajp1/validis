const basicValidations = require('./Validations/basicValidations');
const passwordValidations = require('./Validations/passwordValidations');
const numberValidations = require('./Validations/numberValidations');
const textCaseValidations = require('./Validations/textCaseValidations');

module.exports = {
  ...basicValidations,
  ...passwordValidations,
  ...numberValidations,
  ...textCaseValidations,
};