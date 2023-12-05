import { SlowBuffer } from 'buffer'
import { log } from 'console'
import fs from 'fs'

const test = fs.readFileSync('source/Day5/test.txt', 'utf-8')
const input = fs.readFileSync('source/Day5/input.txt', 'utf-8')

function calculateValue(value: number, rows: number[][]): number {
  console.log('value:', value)
  for (const row of rows) {
    const low = row[1]
    const high = low + row[2]
    console.log(`low: ${low} high: ${high}`)
    if (value >= low && value <= high) {
      console.log(`value: ${value} base: ${row[0]} low: ${low} high: ${high}`)
      return row[0] + row[2]
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
  log(SeedToSoil)
  log(SoilToFertilizer)
  log(FertilizerToWater)
  log(WaterToLight)
  log(LightToTemperature)
  log(TemperatureToHumidity)
  log(HumidityToLocation)

  const locations = []
  seeds.map((seed) => {
    const seedP = parseInt(seed)
    log(`seed: ` + seed)

    const soil = calculateValue(seedP, SeedToSoil)
    log(soil)

    const fertilizer = calculateValue(soil, SoilToFertilizer)
    log(fertilizer)

    const water = calculateValue(fertilizer, FertilizerToWater)
    log(water)

    const light = calculateValue(water, WaterToLight)
    log(light)

    const temperature = calculateValue(light, LightToTemperature)
    log(temperature)

    const humidity = calculateValue(temperature, TemperatureToHumidity)
    log(humidity)

    const location = calculateValue(humidity, HumidityToLocation)
    log(location)

    locations.push(location)
  })
  log(locations)
}

function Star2(data: string = test) {}

export default function Day5() {
  Star1()
  Star2()
}
