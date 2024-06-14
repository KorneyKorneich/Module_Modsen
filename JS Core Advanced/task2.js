"use strict";

function contains(arr, value) {
    if (!Array.isArray(arr)) {
        throw new Error("First argument must be an array.");
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}