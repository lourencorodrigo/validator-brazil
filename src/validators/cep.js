function isCep(cep) {
  if (!cep) return false;

  cep = cep.replace(/\D/g, "");

  return /^[0-9]{8}$/.test(cep);
}

module.exports = { isCep };
