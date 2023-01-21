const minimist = require('minimist')

/**
 * process.argv
 *
 * เลือกคำนวณ พื้นที่สามเหลี่ยม หรือ พื้นที่สี่เหลี่ยม
 * node 05-process-argv.js --s=rect --w=6 --h=8
 */

function get_triangle_area(width, height) {
  return (1 / 2) * width * height
}

function get_rectangle_area(width, height) {
  return width * height
}

const argu = process.argv.slice(2)
const cleanArgu = minimist(argu)
const [s, w, h] = cleanArgu

let area = 0
if (s === 'tri') {
  area = get_triangle_area(Number(w), Number(h))
} else if (s === 'rect') {
  area = get_rectangle_area(Number(w), Number(h))
}

console.log(area)
