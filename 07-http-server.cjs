/**
 * สร้างเว็บฝั่ง server เพื่อตอบสนองต่อ URL เหล่านี้
 * 1. Homepage   -> "/"
 * 2. About page -> "/about"
 */
require('dotenv').config()

const http = require('http')

const { APP_PORT } = process.env

const server = http.createServer((request, response) => {
  const { method, url } = request
  let content = ''

  if (method === 'GET' && url === '/') {
    content = 'Home page'
  } else if (method === 'GET' && url === '/about') {
    content = 'About'
  }

  response.setHeader('Content-Type', 'text/html; charset=UTF-8')
  response.statusCode = 200
  response.end(content)
})

server.listen(APP_PORT, () => {
  console.log(`Server is start the war, on port ${APP_PORT}`)
})
