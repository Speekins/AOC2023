const test = require('./day_1_data.js')
const strings = require('./input.js')
const testData = test.testData
const dataString = test.dataString

function trebuchet(allStrings) {
  allStrings = allStrings.split(' ')
  let allNums = []
  for (let i = 0; i < allStrings.length; i++) {
    let substring = allStrings[i].split('').filter(char => Number.isInteger(Number(char)))
    let total = [substring[0], substring[substring.length - 1]].join('')
    allNums.push(Number(total))
  }
  return allNums.reduce((a, b) => {
    return a + b
  }, 0)
}

console.log(trebuchet(dataString))