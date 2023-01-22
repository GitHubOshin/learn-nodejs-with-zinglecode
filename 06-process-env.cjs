/**
 * สร้างลิ้งก์ MySQL connection string
 * ตัวอย่าง -> mysql://root:pass1234@127.0.0.1:3306/mydb99
 */
require('dotenv').config()

const { MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOSTNAME, MYSQL_PORT, MYSQL_DB } =
  process.env
const dbString = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_PORT}/${MYSQL_DB}`
console.log(dbString)
// console.log(process.env)
// console.log(process.env.MYSQL_TEST, process.env.mymy_666)
