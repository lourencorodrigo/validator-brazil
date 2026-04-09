import { isCnpj } from "../index";

describe("cnpj validation", () => {
  describe("traditional numeric format", () => {
    it("should return true to valid cnpj without hyphen and points", () => {
      expect(isCnpj("00933180000164")).toBeTruthy();
    });

    it("should return true to valid cnpj with hyphen and points", () => {
      expect(isCnpj("00.933.180/0001-64")).toBeTruthy();
    });

    it("should return true for another valid numeric cnpj", () => {
      expect(isCnpj("11222333000181")).toBeTruthy();
    });

    it("should return true for valid numeric cnpj with mask", () => {
      expect(isCnpj("11.222.333/0001-81")).toBeTruthy();
    });

    it("should return false with letters appended", () => {
      expect(isCnpj("00933180000164a")).toBeFalsy();
    });

    it("should return false to invalid cnpj with wrong length", () => {
      expect(isCnpj("001112220000133")).toBeFalsy();
    });

    it("should return false for all-zero cnpj", () => {
      expect(isCnpj("00000000000000")).toBeFalsy();
    });

    it("should return false for all-same-digit sequences", () => {
      expect(isCnpj("11111111111111")).toBeFalsy();
      expect(isCnpj("22222222222222")).toBeFalsy();
      expect(isCnpj("99999999999999")).toBeFalsy();
    });

    it("should return false for invalid check digits", () => {
      expect(isCnpj("11222333000182")).toBeFalsy();
    });
  });

  describe("alphanumeric format (new model 2026)", () => {
    it("should return true for SERPRO reference example", () => {
      expect(isCnpj("12ABC34501DE35")).toBeTruthy();
    });

    it("should return true for alphanumeric cnpj with mask", () => {
      expect(isCnpj("12.ABC.345/01DE-35")).toBeTruthy();
    });

    it("should be case insensitive", () => {
      expect(isCnpj("12abc34501de35")).toBeTruthy();
      expect(isCnpj("12Abc34501De35")).toBeTruthy();
    });

    it("should return true for cnpj with letters in root only", () => {
      expect(isCnpj("AABBCCDD000186")).toBeTruthy();
    });

    it("should return true for cnpj with letters in root and order", () => {
      expect(isCnpj("AB1234CD000160")).toBeTruthy();
    });

    it("should return true for alphanumeric cnpj with mask containing letters", () => {
      expect(isCnpj("AA.BBC.CDD/0001-86")).toBeTruthy();
    });

    it("should return false for alphanumeric cnpj with wrong check digits", () => {
      expect(isCnpj("12ABC34501DE99")).toBeFalsy();
    });

    it("should return false for alphanumeric cnpj with swapped check digits", () => {
      expect(isCnpj("12ABC34501DE53")).toBeFalsy();
    });

    it("should return false when letters appear in check digit positions", () => {
      expect(isCnpj("12ABC34501DEAB")).toBeFalsy();
    });

    it("should return false for empty string", () => {
      expect(isCnpj("")).toBeFalsy();
    });

    it("should return false for cnpj with wrong length", () => {
      expect(isCnpj("12ABC3450")).toBeFalsy();
      expect(isCnpj("12ABC34501DE351")).toBeFalsy();
    });

    it("should return false for cnpj with special characters in body", () => {
      expect(isCnpj("12@BC34501DE35")).toBeFalsy();
    });

    it("should return true for valid alphanumeric cnpj Y0W9NJBN000176", () => {
      expect(isCnpj("Y0W9NJBN000176")).toBeTruthy();
      expect(isCnpj("Y0.W9N.JBN/0001-76")).toBeTruthy();
    });

    it("should return true for valid alphanumeric cnpj RXT0LLNT000102", () => {
      expect(isCnpj("RXT0LLNT000102")).toBeTruthy();
      expect(isCnpj("RX.T0L.LNT/0001-02")).toBeTruthy();
    });

    it("should return true for valid alphanumeric cnpj 2H2HBCV3000101", () => {
      expect(isCnpj("2H2HBCV3000101")).toBeTruthy();
      expect(isCnpj("2H.2HB.CV3/0001-01")).toBeTruthy();
    });

    it("should return true for valid alphanumeric cnpj SYM1ACA4000123", () => {
      expect(isCnpj("SYM1ACA4000123")).toBeTruthy();
      expect(isCnpj("SY.M1A.CA4/0001-23")).toBeTruthy();
    });

    it("should return true for valid alphanumeric cnpj 62CZK2G5000175", () => {
      expect(isCnpj("62CZK2G5000175")).toBeTruthy();
      expect(isCnpj("62.CZK.2G5/0001-75")).toBeTruthy();
    });

    it("should return false when check digits are tampered on simulator CNPJs", () => {
      expect(isCnpj("Y0W9NJBN000177")).toBeFalsy();
      expect(isCnpj("Y0.W9N.JBN/0001-77")).toBeFalsy();
      expect(isCnpj("RXT0LLNT000103")).toBeFalsy();
      expect(isCnpj("RX.T0L.LNT/0001-03")).toBeFalsy();
      expect(isCnpj("2H2HBCV3000100")).toBeFalsy();
      expect(isCnpj("2H.2HB.CV3/0001-00")).toBeFalsy();
      expect(isCnpj("SYM1ACA4000132")).toBeFalsy();
      expect(isCnpj("SY.M1A.CA4/0001-32")).toBeFalsy();
      expect(isCnpj("62CZK2G5000157")).toBeFalsy();
      expect(isCnpj("62.CZK.2G5/0001-57")).toBeFalsy();
    });
  });
});
