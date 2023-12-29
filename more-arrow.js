const difference = (x, y) => x - y;
// const defer = difference(12,10);
// console.log(defer)

const multiply = (first, second, third) => first * second * third;
// const result = multiply(12, 13,10);
// console.log(result)

const getAge = (person) => person.age;
const person = {
    name: 'arif',
    age: '24',
}
// single parameter 
const myAge = getAge(person)
// console.log(myAge)

const getThird = number => number[2];
const number = [33, 64, 74];
const thirdNumber = getThird(number);
// console.log(thirdNumber)

// no parameter
const getPi = () => Math.PI;
// console.log(getPi())

// large arrow function. if you want to get anything returned from this function. then you have to use the return keyword.
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multi = x * y * z;
    const result = sum + multi;
    return result;
}
const total = doMath(2, 1, 3);
// console.log(total)

