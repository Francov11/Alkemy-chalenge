const models = require('../../database/index')
const { Op } = require('sequelize')

const getAll = () => {
    return models.User.findAll()
  }

module.exports = {
    getAll
}