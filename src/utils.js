var replace_regex = /[\.\-\/]+/g;
var multipliers = {
  cnpj: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2],
  cpf1: [10, 9, 8, 7, 6, 5, 4, 3, 2],
  cpf2: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
};

function random_base(n) {
  var base = "";
  for (var i = 0; i < n; i++) {
    base += Math.round(Math.random() * 9);
  }
  return base;
}

function digit(type) {
  var array_multipliers = multipliers[type];

  return function digit(value) {
    var values = value.split("");
  
    var d = 11 - (values.reduce(function (acc, cur, i) {
      return acc + cur * array_multipliers[i];
    }, 0) % 11);
  
    return d < 10 ? d : 0;
  }
}

module.exports = {
  random_base,
  replace_regex,
  digit,
};
