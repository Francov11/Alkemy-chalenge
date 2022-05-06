const express = require('express')
const app = express();
const cors = require('cors')
const helmet = require('helmet')
const { config } = require('./config/config')


//Config
app.use(cors())
app.use(helmet())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(config.server.port, () => {
	console.log(`Server listening on port ${config.server.port}`);
})

module.exports = app