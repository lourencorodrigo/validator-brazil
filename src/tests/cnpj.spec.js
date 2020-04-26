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
});
