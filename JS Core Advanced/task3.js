"use strict";

function countVowels(str) {
    if (typeof str !== 'string') {
        throw new Error("Input must be a string.");
    }

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    Array.from(str).forEach(element => {
        if (vowels.includes(element)) {
            count++;
        }
    });

    return count;
}