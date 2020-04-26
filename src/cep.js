var utils = require('./utils');

function validate(cep) {
  cep = cep.replace(utils.replace_regex, "");
  var cepRegex = /^[0-9]{8}$/g;
  return cepRegex.test(cep);
}

module.exports = {
  validate,
};
