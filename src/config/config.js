require('dotenv').config()

exports.config = {
    server: {
        port: process.env.PORT || 8080
    },
    DB: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'mariano11',
        database: process.env.MYSQL_NAME || 'disney'
      },
}