const { isCep } = require("./validators/cep");
const { isCpf } = require("./validators/cpf");
const { isCnpj } = require("./validators/cnpj");

module.exports = {
  isCep,
  isCpf,
  isCnpj
};