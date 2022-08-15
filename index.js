// 1:
for (let i = 0; i < 5; i++) {
  console.log(new Array(i).fill("*").join(" "));
}

// 2:
const ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
for (let i = 0; i < ARR.length; i++) {
  console.log(`row ${i}`);
  for (let j = 0; j < ARR[i].length; j++) console.log(`${ARR[i][j]}`);
}

// 3: resolved by Arif.
let arrayQ3a = [];
for (let i = 1; i <= 4; i++) {
  for (let y = 1; y <= 3; y++) {
    arrayQ3a.push(i);
  }
}
console.log(arrayQ3a.join(" "));

let arrayQ3b = [];
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j < 5; j++) {
    arrayQ3b.push(j);
  }
}
console.log(arrayQ3b.join(" "));
