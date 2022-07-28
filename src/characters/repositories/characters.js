const models = require('../../database/index')
const { Op } = require('sequelize')
const characters = require('../../models/characters')

//List of products request
const getAll = async() => await models.Characters.findAll()

//Create a product request
const createCharacter = (characters) => {
    return models.Characters.create(characters)
  }

const modifyCharacter = () => {
    return models.Characters.update({
        image: modifiedProduct.name, price: modifiedProduct.price, available: modifiedProduct.available
      },
      {
        where: {
          id: productid
        }
      })
}
  
const deleteCharacter = (charactersId) => {
    return models.Characters.destroy({
      where: {
        id: charactersId
      }
    })
  }
  
//Exports
module.exports = { 
    getAll,
    createCharacter,
    deleteCharacter
}