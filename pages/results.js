import Head from 'next/Head';
import {useState} from 'react';
import {useRouter} from 'next/router'
import axios from 'axios'

import Fundo from '../src/components/Fundo'
import Header from '../src/components/header'
import Input from '../src/components/input'
import PokeWrapper from '../src/components/pokeWrapper'
import Pokemon from '../src/components/pokemon'


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

            <PokeWrapper>
            {pokeInfo.filter(pokemon => pokemon.name.english.includes(inputContent)).map(filteredPokemon => (
                <Pokemon key = {filteredPokemon.id}>
                    <h1>{filteredPokemon.id}</h1>
                    <h1>{filteredPokemon.name.english}</h1>
                    <h2>{filteredPokemon.type}</h2>
                    <h3>{filteredPokemon.base.HP}</h3>
                    <h3>{filteredPokemon.base.Attack}</h3>
                    <h3>{filteredPokemon.base.Defense}</h3>
                    <h3>{filteredPokemon.base.SpAttack}</h3>
                    <h3>{filteredPokemon.base.SpDefense}</h3>
                    <h3>{filteredPokemon.base.Speed}</h3>
                </Pokemon>
                )
            )}
            
            </PokeWrapper>

        </Fundo>
    )
}

Results.getInitialProps = async () =>{
    const response = await axios.get('http://localhost:5000/search/')
    return {pokeInfo: response.data}
}