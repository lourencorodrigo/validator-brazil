var utils = require('./utils');

function validate(cep) {
  cep = cep.replace(utils.regex_replace, "");
  var regex_cep = /^[0-9]{8}$/g;
  return regex_cep.test(cep);
}

function format(cep) {
  return utils.format("cep")(cep);
}

module.exports = {
  format,
  validate,
};
