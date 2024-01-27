// WPU Coding Challenge 2024
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump / mpg <= fuelLeft) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump/mpg <= fuelLeft;

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  fuelLeft * mpg >= distanceToPump;

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
