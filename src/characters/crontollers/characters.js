require('dotenv').config()
const repositories = require('../repositories/characters')
const http = require('../../helpers/helpers')


const allCharacters = async (req, res) => {
    try{
        const characters = await repositories.getAll();

        return res.status(200).json({ characters: characters });
    } catch(err) {
        http.Error(req,res,err)
    }
}

const  createCharacter = async (req, res) => {
    try {   
        const { image, name, age, weight, history, movies } = req.body;

        const newCharacter = {
            image: image,
            name: name,
            age: age,
            weight: weight,
            history: history,
            movies: movies
        };
      
        await repositories.createCharacter(newCharacter);
       
        res.status(201).json({ message: "Character created" });
    } catch(err) {
        http.Error(req,res,err)
    }
}

const deleteCharacter = async(req, res) => {
    try{
        const characterId = req.params.characterId;
  
        await repositories.deleteCharacter(characterId);
        
        res.status(200).json({ message: "Character deleted" });
    } catch(err) {
        http.Error(req,res,err)
    }
}

module.exports = { 
    allCharacters,
    createCharacter,
    deleteCharacter
}
