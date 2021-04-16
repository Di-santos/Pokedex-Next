import Head from 'next/head';
import {useState} from 'react';
import {useRouter} from 'next/router'
import axios from 'axios'

import Fundo from '../components/fundo'
import Header from '../components/header'
import Input from '../components/input'
import PokeGrid from '../components/pokeGrid'
import Pokemon from '../components/pokemon'


export default function Results({pokeInfo}) {
    // Hook de roteamento do Next (Server Side Rendering, SEO e outras ferramentas do navegador)
    const router = useRouter()
    const firstPoke = router.query.pokemon

    // States da Home (React Hooks)
    const [inputContent,setInputContent] = useState(firstPoke)
    //{console.log(pokeInfo.filter(pokemon => pokemon.name.english.includes(inputContent)))}

    return (
        <Fundo>
            <Head>
                <title>
                    PokedexAPI: Busca
                </title>
            </Head>

            <Header>
                    <a onClick={event => router.push('/')} style={{cursor: 'pointer'}}>
                        <img src = '/images/gaming.png'style={{height: 60, width: 60, marginLeft: 30}} ></img>
                    </a>

                    <Input placeholder = "Pokémon" onChange = {event => setInputContent(event.target.value)}></Input>

            </Header>
            <PokeGrid>
            {pokeInfo.filter(pokemon => pokemon.name.english.toLowerCase().startsWith(inputContent.toLowerCase())).slice(0,13).map(filteredPokemon => (

                <Pokemon key = {filteredPokemon.id} pokeStats = {filteredPokemon}/>
                )
            )}
            
            </PokeGrid>

        </Fundo>
    )
}

Results.getInitialProps = async () =>{
    const response = await axios.get('https://pokefast.vercel.app/api/pokedex')
    return {pokeInfo: response.data.pokedex}
}