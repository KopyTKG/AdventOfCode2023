import { log } from 'console'
import fs from 'fs'

const input = fs.readFileSync('Day3/test.txt', 'utf-8').split('\n')

function Star1() {
  const nodes = []
  input.map((element) => {
    const row = []
    element
      .replaceAll('.', '|')
      .split('')
      .map((value) => {
        if (value === '|') {
          row.push(null)
        } else {
          row.push(value)
        }
      })
    nodes.push(row)
  })

  for (let r = 1; r < nodes.length - 1; r++) {
    for (let c = 1; c < nodes[r].length - 1; c++) {
      if (!nodes[r][c]) continue
      
      if (parseInt(nodes[r][c - 1]) && nodes[r][c - 1]) {
        if (parseInt(nodes[r][c]) && nodes[r][c]) {
          log(`${nodes[r][c - 1]}${nodes[r][c]}`)
        }
      }
    }
  }

  log(nodes)
}

export default function Day3() {
  Star1()
}
