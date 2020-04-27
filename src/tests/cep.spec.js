const cep = require("../cep");

describe("cep", () => {
  describe('validate', () => {
    it("should return true to valid cep without hyphen", () => {
      expect(cep.validate("14710130")).toBeTruthy();
    });
  
    it("should return true to invalid cep with 0 in the initial", () => {
      expect(cep.validate("04710130")).toBeTruthy();
    });
  
    it("should return true to valid cep WITH hyphen", () => {
      expect(cep.validate("54710-130")).toBeTruthy();
    });
  
    it("should return true to valid cep WITHOUT hyphen", () => {
      expect(cep.validate("54710130")).toBeTruthy();
    });
  
    it("should return false to invalid cep", () => {
      expect(cep.validate("5471012023")).toBeFalsy()
    });
  });

  describe('format', () => {
    it('should format the cep 1', () => {
      expect(cep.format('00111222')).toEqual('00111-222');
    });

    it('should format the cep 2', () => {
      expect(cep.format('11222333')).toEqual('11222-333');
    });
  });
});
