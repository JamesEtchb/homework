// 1. Write a function that adds two numbers together.
// 2. Write a car object that has a modal and color.  Create a property called year then console.log all of the objects properties individually.
// 3. Write a function to get the first element in an array.

let sum = (x, y) => {
  return x + y
}

console.log(sum(4, 5))

let car = {
  model: "Saab",
  color: "Black",
}

car.year = 2020
console.log(car.model)
console.log(car.color)
console.log(car.year)
console.log(
  `My car's model is ${car.model}, the color is ${car.color}, and the year is ${car.year}.`
)

const thisArray = ["videogame", "books", "pt"]

function findFirst(arr, i) {
  if (i === true){
    return arr[i]
  } else {
    return arr[0]
  }
}

console.log(findFirst(thisArray,1))
