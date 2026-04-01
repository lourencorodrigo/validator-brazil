// Supports both numeric and alphanumeric CNPJ formats
// based on Receita Federal specification

var BASE_LENGTH = 12;

var REGEX_BASE = /^([A-Z\d]){12}$/;
var REGEX_CNPJ = /^([A-Z\d]){12}(\d){2}$/;

var MASK_CHARS_REGEX = /[./-]/g;
var INVALID_CHARS_REGEX = /[^A-Z\d./-]/i;

var ASCII_BASE = "0".charCodeAt(0);

var DV_WEIGHTS = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

function removeMask(cnpj) {
  return cnpj.replace(MASK_CHARS_REGEX, "");
}

function isRepeatedSequence(str) {
  return /^([A-Z\d])\1+$/.test(str);
}

function calculateDV(cnpj) {
  if (!cnpj) return null;
  if (INVALID_CHARS_REGEX.test(cnpj)) return null;

  var cleanCnpj = removeMask(cnpj);

  if (!REGEX_BASE.test(cleanCnpj) || isRepeatedSequence(cleanCnpj)) {
    return null;
  }

  var sumDV1 = 0;
  var sumDV2 = 0;

  for (var i = 0; i < BASE_LENGTH; i++) {
    var asciiValue = cleanCnpj.charCodeAt(i) - ASCII_BASE;
    sumDV1 += asciiValue * DV_WEIGHTS[i + 1];
    sumDV2 += asciiValue * DV_WEIGHTS[i];
  }

  var dv1 = sumDV1 % 11 < 2 ? 0 : 11 - (sumDV1 % 11);
  sumDV2 += dv1 * DV_WEIGHTS[BASE_LENGTH];
  var dv2 = sumDV2 % 11 < 2 ? 0 : 11 - (sumDV2 % 11);

  return dv1.toString() + dv2.toString();
}

function isCnpj(cnpj) {
  if (!cnpj) return false;

  cnpj = cnpj.toUpperCase();

  if (INVALID_CHARS_REGEX.test(cnpj)) return false;

  var cleanCnpj = removeMask(cnpj);

  if (!REGEX_CNPJ.test(cleanCnpj) || isRepeatedSequence(cleanCnpj)) {
    return false;
  }

  var providedDV = cleanCnpj.substring(BASE_LENGTH);
  var base = cleanCnpj.substring(0, BASE_LENGTH);
  var calculatedDV = calculateDV(base);

  if (!calculatedDV) return false;

  return providedDV === calculatedDV;
}

module.exports = { isCnpj };
