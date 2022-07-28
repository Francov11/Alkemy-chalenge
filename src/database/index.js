const { Sequelize } = require('sequelize');
const userModel = require('../models/users')
const characterModel = require('../models/characters')

const sequelize = new Sequelize('alkemy', 'root', 'mariano11', {
    host: 'localhost',
    dialect: 'mysql',
    })

const User = userModel(sequelize,Sequelize)
const Characters = characterModel(sequelize,Sequelize)

sequelize.sync({force:false})
.then(() => {
    console.log('Exito')
})

module.exports = {
    sequelize,
    User,
    Characters
}