const validateValue = require('./validateValue');

test('Валидация значения', () => {
    expect(validateValue(50)).toBe(true);
})

describe('validateValue', () => {
    test('Корректрое значение', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('Меньше корректного', () => {
        expect(validateValue(-1)).toBe(false);
    })
    test('Больше корректного', () => {
        expect(validateValue(101)).toBe(false);
    })
})
