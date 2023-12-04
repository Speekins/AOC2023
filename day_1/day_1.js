const test = require('./day_1_data.js')
const testData = test.testData.split(" ")
const dataString = test.dataString.split(' ')

console.log(testData)
console.log(dataString)

function trebuchet(arr) {
  let allNums = []
  for (let i = 0; i < arr.length; i++) {
    allNums.push(stringy(arr[i]))
  }
  return allNums.reduce((a, b) => {
    return a + b
  })
}

function stringy(string) {
  let nums = [];
  for (let i = 0; i < string.length; i++) {
    if (Number.isInteger(Number(string[i]))) {
      nums.push(string[i])
      break
    }
  }
  for (let i = string.length; i > 0; i--) {
    if (Number.isInteger(Number(string[i]))) {
      nums.push(string[i])
      break
    }
  }
  
  return Number(nums.join(''))
}

console.log(trebuchet(dataString))