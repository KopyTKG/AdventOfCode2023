import { log } from 'console'
import fs from 'fs'

const input = fs.readFileSync('./Day1/star2/input.txt', 'utf8').split('\n')

const numbers = (element) => {
  const numbers1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const numbers2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  let first = null
  let min = Infinity

  numbers1.forEach((textN, i) => {
    const foundN1 = element.indexOf(textN)
    const foundN2 = element.indexOf(numbers2[i])

    const found = Math.min(...[min, foundN1, foundN2].filter((n) => n > -1))

    if (found < min) {
      min = found
      first = i + 1
    }
  })

  let last = null
  let max = -1

  numbers1.forEach((textN, i) => {
    const foundN1 = element.lastIndexOf(textN)
    const foundN2 = element.lastIndexOf(numbers2[i])
    const found = Math.max(max, foundN1, foundN2)

    if (found > max) {
      max = found
      last = i + 1
    }
  })

  return first * 10 + last
}

function D1S2() {
  log(
    input
      .map((l) => {
        return numbers(l)
      })
      .reduce((sum, n) => sum + n, 0),
  )
}

export default D1S2
