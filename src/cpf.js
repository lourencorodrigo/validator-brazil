var utils = require('./utils');

function validate_cpf(cpf) {
  cpf = cpf.replace(utils.regex_replace, "");

  if (
    cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  )
    return false;

  var add = 0;
  for (var i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  var rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(9))) return false;

  add = 0;

  for (var i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(10))) return false;
  return true;
}

function format_cpf(cpf) {
  return utils.format("cpf")(cpf);
}

function generate_cpf(format) {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var base = utils.random_base(9);
  var d1 = utils.digit("cpf1")(base);
  var d2 = utils.digit("cpf2")(base + d1);

  var cpf = base + d1 + d2;
  return format ? format_cpf(cpf) : cpf;
}

module.exports = {
  format: format_cpf,
  validate: validate_cpf,
  generate: generate_cpf,
};
