const cnpj = require("../cnpj");

describe("cnpj", () => {
  describe('validate', () => {
    it("should return true to valid cnpj without hyphen and points", () => {
      expect(cnpj.validate("00933180000164")).toBeTruthy();
    });
  
    it("should return true to valid cnpj with hyphen and points", () => {
      expect(cnpj.validate("00.933.180/0001-64")).toBeTruthy();
    });
  
    it("should return false with letters", () => {
      expect(cnpj.validate("00933180000164a")).toBeFalsy();
    });
  
    it("should return false to invalid cnpj with hyphen and points", () => {
      expect(cnpj.validate("001112220000133")).toBeFalsy();
    });
  
    it("should return false to invalid cnpj", () => {
      expect(cnpj.validate("00000000000000")).toBeFalsy();
    });
  });

  describe('random', () => {
    it('should create a random cnpj valid', () => {
      expect(cnpj.validate(cnpj.generate())).toBeTruthy();
      expect(cnpj.validate(cnpj.generate())).toBeTruthy();
      expect(cnpj.validate(cnpj.generate())).toBeTruthy();
    });
  });

  describe('format', () => {
    it('should format the cnpj 1', () => {
      expect(cnpj.format('00111222000100')).toEqual('00.111.222/0001-00');
    });

    it('should format the cnpj 2', () => {
      expect(cnpj.format('11222333000212')).toEqual('11.222.333/0002-12');
    });

    it ('should valid generate format', () => {
      const regex = /^[\d]{2}\.[\d]{3}\.[\d]{3}\/[\d]{4}\-[\d]{2}$/g;
      expect(regex.test(cnpj.generate())).toBeTruthy();
    });
  });
});
