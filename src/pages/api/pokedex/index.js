import pokedex from '../../../src/db/pokedex.json'

export default function handler(req, res) {
    try{
        res.status(200).json({pokedex})

    }
    catch(error){
        res.status(500).json({ message: error.message})
    }
  }