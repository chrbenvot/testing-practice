export function capitalize(str) {
  if (!str) return str; // Return the original string if it's empty
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function reverseString(str) {
    if (str === null || str === undefined) return str; // Handle null or undefined inputs
    return str.split('').reverse().join('');
}
export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
};
export function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            // Shift the character to uppercase and get the ASCII value
            const isUpperCase = char === char.toUpperCase();
            const base = 'A'.charCodeAt(0); // ASCII value of 'A'
            const charCode = char.toUpperCase().charCodeAt(0); // ASCII value of the character
            
            // Calculate the new character code with wrapping
            const newCharCode = ((charCode - base + shift) % 26) + base;

            // Convert back to character and return with the original case
            return isUpperCase ? String.fromCharCode(newCharCode) : String.fromCharCode(newCharCode + 32); // +32 to convert to lowercase
        }
        return char; // Non-alphabetic characters remain unchanged
    }).join('');
}

export function analyzeArray(arr) {
    if (arr.length === 0) {
        return {
            average: NaN,
            min: undefined,
            max: undefined,
            length: 0,
        };
    }

    const length = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const average = arr.reduce((sum, value) => sum + value, 0) / length;

    return {
        average,
        min,
        max,
        length,
    };
}