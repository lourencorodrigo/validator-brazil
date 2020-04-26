const isCep = require("../index").isCep;

describe("cep validation", () => {
  it("should return true to valid cep without hyphen", () => {
    expect(isCep("14710130")).toBeTruthy();
  });

  it("should return true to invalid cep with 0 in the initial", () => {
    expect(isCep("04710130")).toBeTruthy();
  });

  it("should return true to valid cep WITH hyphen", () => {
    expect(isCep("54710-130")).toBeTruthy();
  });

  it("should return true to valid cep WITHOUT hyphen", () => {
    expect(isCep("54710130")).toBeTruthy();
  });

  it("should return false to invalid cep", () => {
    expect(isCep("5471012023")).toBeFalsy()
  });
});
