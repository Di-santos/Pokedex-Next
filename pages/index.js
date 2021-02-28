// Explicação
/**
Funções no React representam os componentes. Por trás dos panos, é como se injetassem o retorno da função uma div.
O React pode ser injetado diretamente no HTML, mas por framework essa conversão é feita pelo transpilador (Babel)

Componente Padrão
function Welcome(props){
    return (
        <p> {props.children} </p>
        )
    }
    
Com styled components, pode-se definir e estilizar tais componentes de maneira simplificada (pré-configurada)

Styled Component
const Title = styled.h1`
    font-size: 100px;
    color: ${({ theme }) => theme.colors.primary};
`
Além disso, pode-se modularizar e dar import nos componentes já estilizados, como botões, formulários, cards, etc.
**/ 


// Imports (node modules e diretórios locais)
import Head from 'next/Head';
import styled from 'styled-components'

import Fundo from '../src/components/Fundo'
import Welcome from '../src/components/welcome'
import StateInput from '../src/components/state-input'
import Search from '../src/components/search'
import searchPokemon from '../src/functions/searchPokemon'

// Default
export default function Home() {
    return (
        <Fundo>
            <Head>
                <title>
                    PokedexAPI
                </title>
            </Head>

            <Welcome>
                <h1> PokedexAPI </h1>
                <p> Pokestats decolando na velocidade da luz! </p>

                <Search>

                    <StateInput></StateInput>
                    <button type="submit" >Buscar</button>

                </Search>
            </Welcome>
        </Fundo>
    )
}
