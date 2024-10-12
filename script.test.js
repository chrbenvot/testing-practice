import {capitalize,reverseString,calculator,caesarCipher,analyzeArray} from './script.js';

describe('capitalize', () => {
    test('capitalizes the first character of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('returns an empty string if input is empty', () => {
        expect(capitalize('')).toBe('');
    });

    test('does not change a string that is already capitalized', () => {
        expect(capitalize('World')).toBe('World');
    });

    test('capitalizes the first character when string has leading spaces', () => {
        expect(capitalize('  hello')).toBe('  Hello');
    });

    test('capitalizes the first character of a single character string', () => {
        expect(capitalize('a')).toBe('A');
    });
});

describe('reverseString', () => {
    test('reverses a regular string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('reverses a string with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('returns an empty string when input is empty', () => {
        expect(reverseString('')).toBe('');
    });

    test('handles a single character', () => {
        expect(reverseString('a')).toBe('a');
    });

    test('returns null if input is null', () => {
        expect(reverseString(null)).toBe(null);
    });

    test('returns undefined if input is undefined', () => {
        expect(reverseString(undefined)).toBe(undefined);
    });
});

describe('calculator', () => {
    test('adds two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-1, 1)).toBe(0);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(0, 1)).toBe(-1);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-1, 1)).toBe(-1);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-4, 2)).toBe(-2);
    });

    test('throws error when dividing by zero', () => {
        expect(() => calculator.divide(1, 0)).toThrow('Cannot divide by zero');
    });
});

describe('caesarCipher', () => {
    test('shifts characters by the specified amount', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('abc', 3)).toBe('def');
    });

    test('preserves case during shifting', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('Mixed Case', 2)).toBe('Okvg Ecu');
    });

    test('wraps around the alphabet', () => {
        expect(caesarCipher('z', 1)).toBe('a');
        expect(caesarCipher('Z', 1)).toBe('A');
        expect(caesarCipher('xyz', 5)).toBe('cde');
        expect(caesarCipher('XYZ', 5)).toBe('CDE');
    });

    test('handles punctuation and non-alphabetic characters', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('Spaces 1234!', 4)).toBe('Wevige 1234!');
        expect(caesarCipher('Punctuation: #$%&', 5)).toBe('Uqjwxrjwy: #$%&');
    });
});

describe('analyzeArray', () => {
    test('returns correct analysis for a regular array', () => {
        const result = analyzeArray([1, 2, 3, 4, 5]);
        expect(result).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5,
        });
    });

    test('handles negative numbers', () => {
        const result = analyzeArray([-1, -2, -3, -4, -5]);
        expect(result).toEqual({
            average: -3,
            min: -5,
            max: -1,
            length: 5,
        });
    });

    test('handles mixed positive and negative numbers', () => {
        const result = analyzeArray([-1, 0, 1, 2, 3]);
        expect(result).toEqual({
            average: 1,
            min: -1,
            max: 3,
            length: 5,
        });
    });

    test('handles a single-element array', () => {
        const result = analyzeArray([5]);
        expect(result).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 1,
        });
    });

    test('handles an empty array', () => {
        const result = analyzeArray([]);
        expect(result).toEqual({
            average: NaN,
            min: undefined,
            max: undefined,
            length: 0,
        });
    });
});