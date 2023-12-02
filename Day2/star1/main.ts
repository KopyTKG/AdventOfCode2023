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
      bags: [],
    }
    const data = element.split(': ')[1]
    const bags = data.split('; ')
    const parsedBags = []
    bags.map((bag) => {
      const colors = bag.split(', ')
      const collected = [0, 0, 0]
      colors.forEach((color) => {
        const [value, key] = color.split(' ')
        collected[Colors[key]] += parseInt(value)
      })
      parsedBags.push(collected)
    })
    gameData.bags = parsedBags
    games.push(gameData)
  })
  return games
}

function LowerThen(check, dataset = test) {
  const games = GetGames(dataset)
  let total = 0
  games.map((game) => {
    const ids = []
    game.bags.map((bag) => {
      if (
        bag[Colors.red] > check[Colors.red] ||
        bag[Colors.green] > check[Colors.green] ||
        bag[Colors.blue] > check[Colors.blue]
      ) {
        ids.push(game.id)
      }
    })
    if (ids.length == 0) {
      total += game.id
    }
  })
  return total
}

function D2S1() {
  const check = [12, 13, 14]
  const lower = LowerThen(check, input)
  log(lower)
}

export default D2S1
