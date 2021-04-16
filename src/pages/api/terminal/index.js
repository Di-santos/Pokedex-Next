import info from '../../../db/data.json'

export default function handler(req, res) {
    try{
        res.status(200).json({info})

    }
    catch(error){
        res.status(500).json({ message: error.message})
    }
  }