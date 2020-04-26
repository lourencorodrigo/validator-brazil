var regex_replace = /[\.\-\/]+/g;
var regex_cnpj = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
var regex_cpf = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
var regex_cep = /^(\d{5})(\d{3})$/;
var regex_format = {
  cnpj: {
    regex: regex_cnpj,
    format: "$1.$2.$3/$4-$5",
  },
  cpf: {
    regex: regex_cpf,
    format: "$1.$2.$3-$4",
  },
  cep: {
    regex: regex_cep,
    format: "$1-$2",
  },
};

var multipliers = {
  cnpj: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
  cpf1: [10, 9, 8, 7, 6, 5, 4, 3, 2],
  cpf2: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
};

function format(type) {
  return function(value) {
    return value
      .toString()
      .replace(/[^\d]/g, "")
      .replace(regex_format[type].regex, regex_format[type].format);
  }
}

function random_base(n) {
  var base = "";
  for (var i = 0; i < n; i++) {
    base += Math.round(Math.random() * 9);
  }
  return base;
}

function digit(type) {
  var array_multipliers = multipliers[type];

  return function(value) {
    var values = value.split("");

    var d = 11 - (values.reduce(function (acc, cur, i) {
      return acc + cur * array_multipliers[i];
    }, 0) % 11);

    return d < 10 ? d : 0;
  };
}

module.exports = {
  format: format,
  random_base: random_base,
  regex_replace: regex_replace,
  regex_cnpj: regex_cnpj,
  regex_cpf: regex_cpf,
  digit: digit,
};
