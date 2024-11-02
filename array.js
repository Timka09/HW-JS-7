// Task 1
const massive = [3, 5, 7]
massive[1] = 10
console.log(massive)
// Task 2
const strings = ["Tima", "Olga", "Barys"]
strings[3] = "Max"
console.log(strings)
// Task 3
const numb = [3, 6, 7, 8]
const equal = numb[0] + numb[1] + numb[2] + numb[3]
console.log(equal)
// Task 4
const cycle = [4, 2, 5, 6, 8]
let total = 0;
for (let i = 0; i < cycle.length; i++) {
total += cycle[i];
console.log(cycle[i]);
}
// Task 5
const massStrings = ["Tima", "Bryslav", "Maxym", "Dmytro", "Olga"];
for (let i = 0; i < massStrings.length; i++) {
    if (massStrings[i].length > 5) {
     console.log(massStrings[i]);
 }
}
// Task 6
let numbers = [5, 12, 8, 21, 3, 17, 9, 44, 6, 13];
let max = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);
// Task 7
let numbers1 = [5, 12, 8, 21, 3, 17, 9, 44, 6, 13];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0) {
    console.log(numbers1[i]);
  }
}
