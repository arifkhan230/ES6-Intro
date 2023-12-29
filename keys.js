const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
// console.log(glass);
// will give all properties values 
const keys = Object.keys(glass);
// console.log(keys);

// will give value of all  property
const values = Object.values(glass);
// console.log(values);

// array of array or two dimensional array.
const entries = Object.entries(glass);
// console.log(entries);

// delete element from object
// delete glass.isCleaned;
const {isCleaned, ...shortGlass} = glass;

// console.log(shortGlass);

// freeze
// Object.freeze(glass);
Object.seal(glass);
glass.source = 'bangladesh';
glass.price = 5000;
console.log(glass)