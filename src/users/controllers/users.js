const repositories = require('../repositories/users')
const http = require('../../helpers/helpers')


const allUsers = async (req, res) => {
    const users = await repositories.getAll()
    console.log(users)
    return res.status(200).json(users)
  }

module.exports = {
    allUsers
}