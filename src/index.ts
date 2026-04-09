const STRIP_REGEX = /[.\-/]+/g;

const INVALID_CNPJ = new Set([
  "00000000000000",
  "11111111111111",
  "22222222222222",
  "33333333333333",
  "44444444444444",
  "55555555555555",
  "66666666666666",
  "77777777777777",
  "88888888888888",
  "99999999999999",
]);

const INVALID_CPF = new Set([
  "00000000000",
  "11111111111",
  "22222222222",
  "33333333333",
  "44444444444",
  "55555555555",
  "66666666666",
  "77777777777",
  "88888888888",
  "99999999999",
]);

/**
 * @param cnpj Cadastro Nacional da Pessoa Jurídica
 */
export function isCnpj(cnpj: string): boolean {
  cnpj = cnpj.replace(STRIP_REGEX, "");

  if (cnpj === "" || cnpj.length !== 14 || INVALID_CNPJ.has(cnpj)) {
    return false;
  }

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== Number(digits.charAt(0))) return false;

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== Number(digits.charAt(1))) return false;

  return true;
}

/**
 * @param cpf Cadastro de Pessoas Físicas
 */
export function isCpf(cpf: string): boolean {
  cpf = cpf.replace(STRIP_REGEX, "");

  if (cpf === "" || cpf.length !== 11 || INVALID_CPF.has(cpf)) {
    return false;
  }

  let add = 0;
  for (let i = 0; i < 9; i++) {
    add += parseInt(cpf.charAt(i), 10) * (10 - i);
  }

  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9), 10)) return false;

  add = 0;
  for (let i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i), 10) * (11 - i);
  }

  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10), 10)) return false;

  return true;
}

/**
 * @param cep Código de Endereçamento Postal
 */
export function isCep(cep: string): boolean {
  cep = cep.replace(STRIP_REGEX, "");
  return /^[0-9]{8}$/.test(cep);
}
