const test = require('./day_1_data.js')
const strings = require('./input.js')
const testData = test.testData
const testData2 = test.testData2
const dataString = test.dataString

const digitWords = {
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9
}


function trebuchet(strings) {
  strings = strings.split(' ')
  let nums = []
  let words = Object.keys(digitWords)

  strings.forEach(sub => {
    let subArr = []
    for (let i = 0; i < sub.length; i++) {
      let word = sub.slice(0, i)
      for (numWord in digitWords) {
        if (word.includes(numWord)) {
          subArr.push(digitWords[numWord])
          break
        }
      }
      if (subArr.length === 1) {
        break
      } else if (Number.isInteger(Number(sub[i]))) {
        subArr.push(Number(sub[i]))
        break
      }
    }
    for (let i = sub.length; i >= 0; i--) {
      let word = sub.slice(i)
      for (numWord in digitWords) {
        if (word.includes(numWord)) {
          subArr.push(digitWords[numWord])
          break
        }
      }
      if (subArr.length === 2) {
        break
      } else if (Number.isInteger(Number(sub[i]))) {
        subArr.push(Number(sub[i]))
        break
      }
    }
    nums.push(Number(subArr.join('')))
  })

  return nums.reduce((a, b) => { return a + b }, 0)
}

console.log(trebuchet(dataString))
