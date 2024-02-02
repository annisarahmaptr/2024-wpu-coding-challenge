// WPU Coding Challenge 2024
// 9/366
// https://www.codewars.com/kata/577a98a6ae28071780000989

// var min = function (list) {
//   //   return Math.min( ...list );
//   return Math.min.apply(null, list);
// };

// var max = function (list) {
//   //   return Math.max(...list);
//   return Math.max.apply(null, list);
// };

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// var min = function (list) {
//   let minValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (minValue > list[i]) {
//       minValue = list[i];
//     }
//   }
//   return minValue;
// };

// var max = function (list) {
//   let maxValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (maxValue < list[i]) {
//       maxValue = list[i];
//     }
//   }
//   return maxValue;
// };

const min = (list) => list.sort((a, b) => a - b)[0];
const max = (list) => list.sort((a, b) => b - a)[0];

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
