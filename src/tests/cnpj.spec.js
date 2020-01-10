import { isCnpj } from "../index";

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

  it("should return false to invalid cnpj with hyphen and points", () => {
    expect(isCnpj("001112220000133")).toBeFalsy();
  });

  it("should return false to invalid cnpj", () => {
    expect(isCnpj("00000000000000")).toBeFalsy();
  });
});
