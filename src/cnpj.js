var utils = require("./utils");

function validate_cnpj(cnpj) {
  cnpj = cnpj.replace(utils.regex_replace, "");

  if (cnpj.length != 14) return false;

  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  )
    return false;

  var size = cnpj.length - 2;
  var numbers = cnpj.substring(0, size);
  var digits = cnpj.substring(size);
  var sum = 0;
  var pos = size - 7;
  for (var i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }
  var result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result != digits.charAt(0)) return false;

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (var i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result != digits.charAt(1)) return false;

  return true;
}

function format_cnpj(cnpj) {
  return utils.format("cnpj")(cnpj);
}

function generate_cnpj(format) {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var base = utils.random_base(8);
  var body = base + "0001";
  var d1 = utils.digit("cnpj")("0" + body);
  var d2 = utils.digit("cnpj")(body + d1);

  var cnpj = body + d1 + d2;
  return format ? format_cnpj(cnpj) : cnpj;
}

module.exports = {
  format: format_cnpj,
  validate: validate_cnpj,
  generate: generate_cnpj,
};
