const {Sequelize ,DataTypes, Model } = require('sequelize');
const {sequelize} = require('../database/index');


(async() => {
    await sequelize.sync({ force: true })
    console.log('hola')
})
