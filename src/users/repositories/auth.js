const models = require('../../database/index')
const { Op } = require('sequelize')

const register = async (newUser) => {
    return await models.User.create(newUser)
  }

const login = async(email) => {
    return await models.User.findOne({
        where: {
            email: email
        }
    })
}

module.exports = { 
    register,
    login
}