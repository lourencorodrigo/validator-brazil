import { isCpf } from '../index';

describe('cpf validation', () => {
    it('should return true to valid cpf', () => {
        expect(isCpf('14552586017')).toEqual(true);
    });

    it('should return false to invalid cpf - 1', () => {
        expect(isCpf('00011122233')).toEqual(false);
    });

    it('should return false to invalid cpf - 2', () => {
        expect(isCpf('00011122233')).toEqual(false);
    });
});
