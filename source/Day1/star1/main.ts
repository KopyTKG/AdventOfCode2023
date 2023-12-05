import { log } from 'console'
import fs from 'fs'

const input = fs.readFileSync('./Day1/star1/input.txt', 'utf8').split('\n')

const numbers = () => {
  const numbersParsed = []
  input.map((element) => {
    const current = []
    for (let i = 0; i < element.length; i++) {
      try {
        if (parseInt(element[i])) {
          current.push(element[i])
        }
      } catch (error) {
        console.log(error)
      }
    }
    if (current.length > 1) {
      numbersParsed.push(parseInt(`${current[0]}${current[current.length - 1]}`))
    } else {
      numbersParsed.push(parseInt(`${current[0]}`))
    }
  })

  return numbersParsed
}

function D1S1() {
  const sum = numbers().reduce((a, b) => a + b)
  log(sum)
}

export default D1S1
