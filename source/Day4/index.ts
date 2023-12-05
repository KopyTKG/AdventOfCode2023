import { log } from 'console'
import fs from 'fs'

const test = fs.readFileSync('Day4/test.txt', 'utf-8').split('\n')
const input = fs.readFileSync('Day4/input.txt', 'utf-8').split('\n')

function Star1(data: string[] = test) {
  let total = 0
  data.map((row) => {
    const card = row.split('|')[0]
    const winning = row.split('|')[0].split(':')[1].trim().split(' ')
    const numbers = row.split('|')[1].trim().split(' ')
    log(winning)
    log(numbers)
    let counter = -1
    numbers.map((number) => {
      if (winning.includes(number) && number !== '') {
        counter++
      }
    })
    if (counter >= 0) {
      log(`${card} : ${Math.pow(2, counter)}`)
      total += Math.pow(2, counter)
    }
  })
  log(total)
}

class Card {
  winning: string[]
  numbers: string[]
  count: number
  constructor(winning: string[], numbers: string[]) {
    this.winning = winning
    this.numbers = numbers
    this.count = 1
  }

  get Winning() {
    return this.winning
  }

  get Numbers() {
    return this.numbers
  }

  got() {
    this.count += 1
  }

  public next(): boolean {
    if (this.valid()) {
      this.count -= 1
      return true
    }
    return false
  }
  public valid(): boolean {
    if (this.count > 0) {
      return true
    }
    return false
  }
}

function Star2(data: string[] = test) {
  const cards = []
  data.map((row) => {
    const winning = row.split('|')[0].split(':')[1].trim().split(' ')
    const numbers = row.split('|')[1].trim().split(' ')
    const card = new Card(winning, numbers)
    cards.push(card)
  })
  let total = 0
  while (cards.length > 0) {
    const card = cards.shift()
    while (card.valid()) {
      const winning = card.Winning
      const numbers = card.Numbers
      let counter = 0
      numbers.map((number) => {
        if (winning.includes(number) && number !== '') {
          counter++
        }
      })

      for (let index = 0; index < counter; index++) {
        cards[index].got()
      }
      total++
      card.next()
    }
  }
  log(total)
}

export default function Day4() {
  Star1(input)
  Star2(input)
}
