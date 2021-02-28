export default function searchPokemon(name){
    const url = `http://localhost:5000/search/name/${name}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}