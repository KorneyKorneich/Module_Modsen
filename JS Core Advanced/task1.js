"use strict";

function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}