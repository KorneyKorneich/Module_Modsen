"use strict";

function hasDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array.");
    }

    const elementCount = {};

    for (let i = 0; i < arr.length; i++) {
        if (elementCount[arr[i]]) {
            return true;
        }
        elementCount[arr[i]] = true;
    }

    return false;
}