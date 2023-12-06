import { log } from 'console'
import fs from 'fs'


const test = fs.readFileSync('source/Day5/test.txt', 'utf-8')
const input = fs.readFileSync('source/Day5/input.txt', 'utf-8')

function calculateValue(value: number, rows: number[][]): number {
  for (const row of rows) {
    const low = row[1]
    const high = low + row[2]
    if (value >= low && value <= high) {
      return row[0] + (value - low)
    }
  }
  return value
}

function Star1(data: string = test) {
  const SeedToSoil = []
  const SoilToFertilizer = []
  const FertilizerToWater = []
  const WaterToLight = []
  const LightToTemperature = []
  const TemperatureToHumidity = []
  const HumidityToLocation = []

  const rows = data.split('\n')

  const seeds = rows[0].split(': ')[1].split(' ')

  let selected = null
  rows.map((row) => {
    if (!row) return

    if (row.includes('map')) {
      switch (row.split(' ')[0]) {
        case 'seed-to-soil':
          selected = SeedToSoil
          break
        case 'soil-to-fertilizer':
          selected = SoilToFertilizer
          break
        case 'fertilizer-to-water':
          selected = FertilizerToWater
          break
        case 'water-to-light':
          selected = WaterToLight
          break
        case 'light-to-temperature':
          selected = LightToTemperature
          break
        case 'temperature-to-humidity':
          selected = TemperatureToHumidity
          break
        case 'humidity-to-location':
          selected = HumidityToLocation
          break
      }
    }

    if (!selected) return
    if (selected && !row.includes('map')) {
      const split = row.split(' ')
      const data = []
      split.map((s) => {
        data.push(parseInt(s))
      })
      selected.push(data)
    }
  })

  const locations = []
  seeds.map((seed) => {
    const seedP = parseInt(seed)
    const soil = calculateValue(seedP, SeedToSoil)
    const fertilizer = calculateValue(soil, SoilToFertilizer)
    const water = calculateValue(fertilizer, FertilizerToWater)
    const light = calculateValue(water, WaterToLight)
    const temperature = calculateValue(light, LightToTemperature)
    const humidity = calculateValue(temperature, TemperatureToHumidity)
    const location = calculateValue(humidity, HumidityToLocation)
    locations.push(location)
  })
  log(Math.min(...locations))
}

function Star2(data: string = test) {
  const SeedToSoil = []
  const SoilToFertilizer = []
  const FertilizerToWater = []
  const WaterToLight = []
  const LightToTemperature = []
  const TemperatureToHumidity = []
  const HumidityToLocation = []

  const rows = data.split('\n')

  let selected = null
  rows.map((row) => {
    if (!row) return

    if (row.includes('map')) {
      switch (row.split(' ')[0]) {
        case 'seed-to-soil':
          selected = SeedToSoil
          break
        case 'soil-to-fertilizer':
          selected = SoilToFertilizer
          break
        case 'fertilizer-to-water':
          selected = FertilizerToWater
          break
        case 'water-to-light':
          selected = WaterToLight
          break
        case 'light-to-temperature':
          selected = LightToTemperature
          break
        case 'temperature-to-humidity':
          selected = TemperatureToHumidity
          break
        case 'humidity-to-location':
          selected = HumidityToLocation
          break
      }
    }

    if (!selected) return
    if (selected && !row.includes('map')) {
      const split = row.split(' ')
      const data = []
      split.map((s) => {
        data.push(parseInt(s))
      })
      selected.push(data)
    }
  })

  let min = null
  const splitted = rows[0].split(': ')[1].split(' ')

  for (let i = 0; i < splitted.length - 1; i += 2) {
    for (let j = 0; j < parseInt(splitted[i + 1]); j++) {
      const seed = parseInt(splitted[i]) + j
      const seedP = seed
      const soil = calculateValue(seedP, SeedToSoil)
      const fertilizer = calculateValue(soil, SoilToFertilizer)
      const water = calculateValue(fertilizer, FertilizerToWater)
      const light = calculateValue(water, WaterToLight)
      const temperature = calculateValue(light, LightToTemperature)
      const humidity = calculateValue(temperature, TemperatureToHumidity)
      const location = calculateValue(humidity, HumidityToLocation)
      if (min === null || location < min) {
        min = location
        log(min)
      }
    }
  }
  log(min)
}

export default function Day5() {
  //Star1(input)
  Star2(input)
}
