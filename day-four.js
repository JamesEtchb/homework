// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Call that function for a few different scores and log the result to ensure it works.
// 2. Create a function that returns the number of true values in an array.
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
// 3. Create a function that converts a string to all uppercase letters and console.log the result (hint: string methods):
// let str = “WHAT a TIME to BE ALIVE!”
// 4. Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball team’s total score?
// Extra for experts:
// 5. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)

//1
function assignGrade(x) {
  if (x <= 100 && x >= 90) {
    return "A"
  } else if (x < 90 && x >= 80) {
    return "B"
  } else if (x < 80 && x >= 70) {
    return "C"
  } else if (x < 70 && x >= 60) {
    return "D"
  } else {
    return "F"
  }
}

console.log(assignGrade(98))
console.log(assignGrade(62))
console.log(assignGrade(77))
console.log(assignGrade(80))
console.log(assignGrade(54))

//2
const testArray = [
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
]
let total = 0
for (let i = 0; i < testArray.length; i++) {
  if (testArray[i] === true) {
    total = total + 1
  }
}
console.log(total)

//3
function upCase(x) {
  return x.toUpperCase()
}

console.log(upCase("test"))
console.log(upCase("second test"))
console.log(upCase("third test"))

//4
let twoPoint = [2, 2, 2, 2, 2, 2, 2]
let threePoint = [3, 3, 3, 3, 3, 3]
let finalScore = 0
for (let i = 0; i < twoPoint.length; i++) {
  finalScore = finalScore + twoPoint[i]
}
for (let j = 0; j < threePoint.length; j++) {
  finalScore = finalScore + threePoint[j]
}

console.log(finalScore)

//5

let arr = [1, 2, 3, 4, 5, 6]
let minNum = 0
let maxNum = 0
for (let h = 0; h < arr.length; h++) {
    minNum = Math.min(h)
}
for (let k = 0; k < arr.length; k++) {
    maxNum = Math.max(k)
}

console.log(minNum, maxNum)
