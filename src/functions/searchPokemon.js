// images: https://pokeres.bastionbot.org/images/pokemon/5.png

import Axios from 'axios'

export default function searchPokemon(name){
    if (name == "all"){
        const url = 'http://localhost:5000/search/'
        Axios.get(url)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
    }

    else{
        const url = `http://localhost:5000/search/name/${name}`
        Axios.get(url)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
    }
}