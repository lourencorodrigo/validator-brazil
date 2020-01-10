import { isCep } from "../index";

describe("cep validation", () => {
  it("should return true to valid cep without hyphen", () => {
    expect(isCep("14710130")).toEqual(true);
  });

  it("should return true to invalid cep with 0 in the initial", () => {
    expect(isCep("04710130")).toEqual(true)
  });

  it("should return true to valid cep with hyphen", () => {
    expect(isCep("54710-130")).toEqual(true);
  });

  it("should return false to invalid cep", () => {
    expect(isCep("5471012023")).toEqual(false);
  });
});
