const actor = {
    name: 'Ananta',
    age: 30,
    phone: '01764230122',
    money: 76489127398,
}
// if right side is an array object left side of destructuring will be object as well
// use property name as a variable that contain the property value
const { phone } = actor
const { age: boyos, name, money } = actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
// const money = actor.money;
// console.log(phone);
// console.log(boyos, name, money);

// array destructuring
const numbers = [45, 99];
const [first, second] = numbers;
// console.log(first, second)

// advanced
function doubleThem(a, b) {
    return [a * 2, b * 2];
}
const [poyla, ditio] = doubleThem(22, 45);
console.log(poyla, ditio)