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

//Routes config
const auth = require('./users/routes/auth');
app.use('/', auth);
const users = require('./users/routes/users');
app.use('/', users);
const characters = require('./characters/routes/character')
app.use('/', characters)
/*
app.listen(server.port, () => {
	console.log(`Server listening on port ${server.port}`);
})
*/
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Server listening on port http://localhost:${port}`);
})

module.exports = app
