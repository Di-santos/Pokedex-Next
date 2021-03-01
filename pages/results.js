import Head from 'next/Head';
import {useState} from 'react';
import {useRouter} from 'next/router'
import qs from 'query-string'

import Fundo from '../src/components/Fundo'
import Header from '../src/components/header'
import Input from '../src/components/input'
import Button from '../src/components/button'
import Pokemon from '../src/components/pokemon'

import searchPokemon from '../src/functions/searchPokemon'

export default function Results() {
    // Hook de roteamento do Next (Server Side Rendering, SEO e outras ferramentas do navegador)
    const router = useRouter()

    // States da Home (React Hooks)
    const [inputContent,setInputContent] = useState("")
    const [pokeData, setPokeData] = useState([])


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


                <form onSubmit = {event => {
                    // Evita o F5 na página
                    event.preventDefault()
                    
                    router.push(`/results?pokemon=${inputContent}`)
                    setPokeData(searchPokemon(inputContent))
                }}>

                    <Input placeholder = "Pokémon" onChange = {event => setInputContent(event.target.value)}></Input>
                    <Button type = "submit" disabled = {inputContent.length === 0}> Buscar </Button>
                </form>
                
                <Button type = "submit" onClick = {event => setPokeData(searchPokemon('all'))}>Mostrar Pokedex </Button>

            </Header>
        </Fundo>
    )
}
