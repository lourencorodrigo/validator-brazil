import { isCep } from "../index";

describe("cep validation", () => {
    it("should return true to valid cep", () => {
        expect(isCep("54710130")).toEqual(true);
    });

    it("should return false to invalid cep", () => {
        expect(isCep("5471012023")).toEqual(false);
    });
});
