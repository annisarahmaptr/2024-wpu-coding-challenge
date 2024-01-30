// WPU Coding Challenge 2024
// 8/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// var countSheep = function (num) {
//   let res = "";
//   for (let i = 1; i <= num; i++) {
//     res += `${i} sheep...`;
//   }
//   return res;
// };

const countSheep = (num) =>
  [...Array(num)].map((el, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
