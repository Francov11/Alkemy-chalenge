require('dotenv').config()

module.exports = {
    server: {
        port: process.env.SERVER_PORT
    },
    DB: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        name: process.env.MYSQL_NAME,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT
      }
}
