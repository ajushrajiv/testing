function sum(a,b){
    return a + b;
}

function divide(a,b){
    if ( b === 0 || a === 0 ) throw new TypeError("cannot divide numbers");
    return a / b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

module.exports.sum = sum;
module.exports.divide = divide;
module.exports.subtract = subtract;
module.exports.multiply = multiply;

