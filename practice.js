// practice problem ---> 1.1

// const multiply = (num1, num2, num3) => {
//     const multi = num1 * num2 * num3;
//     return multi;
// }
// const result = multiply(5, 2, 10);
// console.log(result);

// practice problem ---> 1.2

const myString = `I am a web developer. 
I love to code. 
I love to eat biryani.`;
console.log(myString)

// // practice problem ---> 1.3

const defaultValue = (a, b = 0) => a + b;
const sum = defaultValue(5,);
console.log(sum);


// practice problem ---> 2.1

const friends = ['Shakil', 'Samad', 'Shahid', 'Ipon', 'imon', 'sakib al hasan'];

const getEven = () => {
    let newArray = [];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length % 2 == 0) {
            newArray.push(friend)
        }
    } return newArray;
}
const even = getEven(friends);
console.log(even);

// practice problem ---> 3

// const numbers = [5, 10, 15];
// const getAverage = () => {
//     const [num1, num2, num3] = numbers;
//     const square = Math.pow(num1, 2) + Math.pow(num2, 2) + Math.pow(num3, 2);
//     const average = square / numbers.length;
//     return average
// }
// const average = getAverage(numbers);
// console.log(average)


const numbers = [5, 10, 15];
const getAverage = () => {
    for (let number of numbers){
        const square = Math.pow(number, 2);
        const average = square / numbers.length;


    }
    return average;


}
const result = getAverage(numbers);
console.log(result)


// practice problem ---> 4

const maximumNumber = (a , b) => {
    const newArray = [...number , ...number2];
    const MaxNum = Math.max(...newArray);
    return MaxNum;
}
const number = [23, 54, 76];
const number2 = [33, 66, 99];
const max = maximumNumber(number,number2);
console.log(max);





