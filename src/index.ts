const STRIP_REGEX = /[.\-/]+/g;

const CNPJ_FORMAT = /^[A-Z0-9]{12}\d{2}$/;
const CNPJ_WEIGHTS_1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const CNPJ_WEIGHTS_2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

function charValue(c: string): number {
  return c.charCodeAt(0) - 48;
}

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
 * Validates both traditional (numeric) and new alphanumeric CNPJ format.
 * Alphanumeric CNPJ: positions 1-12 accept [A-Z0-9], positions 13-14 are numeric check digits.
 * Check digit calculation uses Modulo 11 with ASCII-48 character conversion (SERPRO spec).
 * @param cnpj Cadastro Nacional da Pessoa Jurídica
 */
export function isCnpj(cnpj: string): boolean {
  cnpj = cnpj.replace(STRIP_REGEX, "").toUpperCase();

  if (!CNPJ_FORMAT.test(cnpj) || new Set(cnpj).size === 1) {
    return false;
  }

  const base = cnpj.substring(0, 12);
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += charValue(base.charAt(i)) * CNPJ_WEIGHTS_1[i];
  }
  const dv1 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  const baseWithDv1 = base + String(dv1);
  sum = 0;
  for (let i = 0; i < 13; i++) {
    sum += charValue(baseWithDv1.charAt(i)) * CNPJ_WEIGHTS_2[i];
  }
  const dv2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  return cnpj.substring(12) === `${dv1}${dv2}`;
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
