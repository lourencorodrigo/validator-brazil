const isCnpj = require("../index").isCnpj;

describe("cnpj validation", () => {
  it("should return true to valid cnpj without hyphen and points", () => {
    expect(isCnpj("00933180000164")).toBeTruthy();
  });

  it("should return true to valid cnpj with hyphen and points", () => {
    expect(isCnpj("00.933.180/0001-64")).toBeTruthy();
  });

  it("should return false with letters", () => {
    expect(isCnpj("00933180000164a")).toBeFalsy();
  });

  it("should return false to invalid cnpj", () => {
    expect(isCnpj("001112220000133")).toBeFalsy();
  });

  it("should return false to zeroed cnpj", () => {
    expect(isCnpj("00000000000000")).toBeFalsy();
  });

  it('should validate alphanumeric CNPJ', () => {
    expect(isCnpj('RSLADC9P000163')).toBeTruthy();
  });

  it('should validate alphanumeric CNPJ with hyphen and points', () => {
    expect(isCnpj('BZ.8RJ.STE/0001-08')).toBeTruthy();
  });

  it('should validate lowercase alphanumeric CNPJ', () => {
    expect(isCnpj('bz.8rj.ste/0001-08')).toBeTruthy();
  });

  it('should invalidate wrong alphanumeric CNPJ', () => {
    expect(isCnpj('A1BC234D56EF01')).toBeFalsy();
  });

  it('should invalidate CNPJ with invalid characters', () => {
    expect(isCnpj('BZ@8RJ#STE/0001-08')).toBeFalsy();
  });

  it('should invalidate CNPJ with wrong length', () => {
    expect(isCnpj('A1BC234D56EF2')).toBeFalsy(); // 13 chars
  });

  it('should invalidate CNPJ with wrong check digits', () => {
    expect(isCnpj('RSLADC9P000100')).toBeFalsy();
  });

  it('should return false for null', () => {
    expect(isCnpj(null)).toBeFalsy();
  });

  it('should return false for empty string', () => {
    expect(isCnpj('')).toBeFalsy();
  });

  it('should invalidate repeated numeric sequences', () => {
    expect(isCnpj('00000000000000')).toBeFalsy();
    expect(isCnpj('11111111111111')).toBeFalsy();
    expect(isCnpj('22222222222222')).toBeFalsy();
    expect(isCnpj('99999999999999')).toBeFalsy();
  });

  it('should invalidate repeated alphanumeric sequences', () => {
    expect(isCnpj('AAAAAAAAAAAAAA')).toBeFalsy();
    expect(isCnpj('BBBBBBBBBBBBBB')).toBeFalsy();
    expect(isCnpj('ZZZZZZZZZZZZZZ')).toBeFalsy();
  });

  it('should invalidate repeated sequences with mask', () => {
    expect(isCnpj('AA.AAA.AAA/AAAA-AA')).toBeFalsy();
    expect(isCnpj('11.111.111/1111-11')).toBeFalsy();
  });

  it('should invalidate CNPJ with repeated base', () => {
    expect(isCnpj('AAAAAAAAAAAA12')).toBeFalsy();
    expect(isCnpj('11111111111112')).toBeFalsy();
  });
});
