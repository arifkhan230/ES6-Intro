// function declaration

// function add(a, b){
//     const result = a + b;
//     return result;
// }

function add(a, b) {
    return a + b;
}

// function expression
const add2 = function (a, b) {
    return a + b;
}

// Arrow function
const add3 = (a, b) => a + b
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4 ;
const sum = add4(3, 5, 7, 9);
console.log(sum)

const sum3 = add(12, 43);
console.log(sum3)