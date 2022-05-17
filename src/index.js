const express = require('express')
const app = express();
const cors = require('cors')
const helmet = require('helmet')
const server  = require('./config/config');
const sequelize = require('./database/index')
require('./database/index')

//Config
app.use(cors())
app.use(helmet())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(server.port, () => {
	console.log(`Server listening on port ${server.port}`);
})

module.exports = app
