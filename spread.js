const max = Math.max(67, 74, 98, 38, 23);
// console.log(max)

const numbers = [12, 43, 54, 76, 98, 23, 44];

const arrayMax = Math.max(...numbers);
// console.log(arrayMax);

const arrayMin = Math.min(...numbers);
// console.log(arrayMin);

// use spread operator to copy
const nums = [12, 33, 14, 76];
const nums2 = [...nums];  //copy
nums2.push(44)
console.log(nums)
console.log(nums2)

// advance

const sonka = [...nums, 200]; //add extra elements while copy
console.log(sonka);
