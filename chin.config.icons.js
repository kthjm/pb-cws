const compose = require('chin-plugin-compose')
const convertsvg = require('chin-plugin-convert-svg')
const filename = require('chin-plugin-filename')
const { join } = require('path')
const { chenv } = require('./package.json')

const sizes = [
  16,
  48,
  128
]

const puppeteer = {
  args: ['--no-sandbox']
}

const { src } = chenv.items['this']
const put = join(src, '../icons')
const out = join(src, 'icons')

module.exports = sizes.map((size, index) => {
  const clean = index === 0
  
  const svg = compose([
    convertsvg('.png', { puppeteer, height: size }),
    filename({ name: size }),
  ])
  
  return { put, out, clean, processors: { svg } }
})