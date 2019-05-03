// ******************************************
function multiply1(a, b) {
    return a * b;
}

console.log("multiply1(4, 2) : " + multiply1(4, 2));
console.log("multiply1(4)) : " + multiply1(4));

// ******************************************
function multiply2(a, b) {
    b = typeof b !== 'undefined' ? b : 2;
    return a * b;
}

console.log("multiply2(4, 2) : " + multiply2(4, 2));
console.log("multiply2(4)) : " + multiply2(4));

// ******************************************
function multiply3(a, b = 2) {
    return a * b;
}

console.log("multiply3(4, 2) : " + multiply3(4, 2));
console.log("multiply3(4)) : " + multiply3(4));