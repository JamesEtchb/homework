// What are the seven paradigms of the database?
// Create a function that takes a base number and an exponent number and returns the calculation.
// Create a function that takes an array and a string as arguments and returns the index of the string.
// Create a function that takes an array and returns the types of values (data types) in a new array.

//1.Key-value
//2.Wide column
//3.Document
//4.Relational
//5.Graph
//6.Search
//7.Multi-model

function calculation(x, y) {
  return x ** y
}

console.log(calculation(5, 5))

let testArr = [1, 2, 3, 4, 5]
let testStr = "test"

function findStr(arr, str) {
    let firstArr = arr
    let joinedArr = firstArr.unshift(str)
    return joinedArr[0]
}



console.log(findStr(testArr, testStr))


let testArray = [1,2,"test", true]

function findTypeOf(typeArray) {
  let findType = []
  for (let i = 0; i < typeArray.length; i++) {
    findType.push(typeof typeArray[i])
  }
  console.log(findType)
}

findTypeOf(testArray)