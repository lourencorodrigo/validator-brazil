import { isCnpj } from '../index';

describe('cnpj validation', () => {
    it('should return true to valid cnpj', () => {
        expect(isCnpj('00933180000164')).toEqual(true);
    });

    it('should return false to invalid cnpj - 1', () => {
        expect(isCnpj('001112220000133')).toEqual(false);
    });

    it('should return false to invalid cnpj - 2', () => {
        expect(isCnpj('00000000000000')).toEqual(false);
    });
});
