// WPU Coding Challenge 2024
// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//   let points = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) {
//       points += 3;
//     } else if (games[i][0] < games[i][2]) {
//       points += 0;
//     } else {
//       points += 1;
//     }
//   }
//   return points;
// }

// function points(games) {
//   let points = 0;
//   for (let i = 0; i < games.length; i++) {
//     games[i][0] > games[i][2]
//       ? (points += 3)
//       : games[i][0] < games[i][2]
//       ? (points += 0)
//       : (points += 1);
//   }
//   return points;
// }

// const points = (games) => {
//   let score = 0;
//   games.map((a) => {
//     if (a[0] > a[2]) {
//       score += 3;
//     } else if (a[0] === a[2]) {
//       score += 1;
//     }
//   });
//   return score;
// };

const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
