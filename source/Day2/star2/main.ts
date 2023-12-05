import { log } from 'console'
import fs from 'fs'

const test = fs.readFileSync('./Day2/test.txt', 'utf8').split('\n')
const input = fs.readFileSync('./Day2/input.txt', 'utf8').split('\n')

enum Colors {
  'red' = 0,
  'green' = 1,
  'blue' = 2,
}

const GetGames = (data) => {
  const games = []
  data.map((element) => {
    const gameData = {
      id: parseInt(element.split(': ')[0].split(' ')[1]),
      smallest: [],
    }
    const data = element.split(': ')[1]
    const bags = data.split('; ')
    const collected = [0, 0, 0]
    bags.map((bag) => {
      const colors = bag.split(', ')
      colors.forEach((color) => {
        const [value, key] = color.split(' ')
        if (parseInt(value) > collected[Colors[key]]) {
          collected[Colors[key]] = parseInt(value)
        }
      })
    })
    gameData.smallest = collected
    games.push(gameData)
  })
  return games
}

function LowerThen(check, dataset = test) {
  const games = GetGames(dataset)
  log(games)
  let total = 0
  games.map((game) => {
    total += game.smallest.reduce((a, b) => {
      return a * b
    })
  })
  return total
}

export default function D2S2() {
  const check = [12, 13, 14]
  const lower = LowerThen(check, input)
  log(lower)
}
