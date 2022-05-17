const { Sequelize } = require('sequelize');
const userModel = require('../models/users')

const sequelize = new Sequelize('alkemy', 'root', 'mariano11', {
    host: 'localhost',
    dialect: 'mysql',
    })

const User = userModel(sequelize,Sequelize)

sequelize.sync({force:false})
.then(() => {
    console.log('Exito')
})

module.exports = {
    sequelize,
    User
}