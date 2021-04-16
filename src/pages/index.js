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
import Head from 'next/head';
import {useRouter} from 'next/router'
import {useState} from 'react';

import Fundo from '../components/fundo'
import Welcome from '../components/welcome'
import Search from '../components/search'


// Default
// No index, teremos inputs nativos do html, e no results, nosso próprio componente Input 

export default function Home() {
    // Hook de roteamento do Next (Server Side Rendering, SEO e outras ferramentas do navegador)
    const router = useRouter()

    // States da Home (React Hooks)
    const [inputContent,setInputContent] = useState("")

    return (
        <Fundo>
            <Head>
                <title>
                    PokedexAPI
                </title>
            </Head>

            <Welcome>

                <img src = '/images/gaming.png'style={{height: 150, width: 150}} ></img>

                <h1> PokedexAPI </h1>
                <p> Pokestats decolando na velocidade da luz! </p>

                <Search>
                    <form onSubmit = {event => {
                        // Evita o F5 na página
                        event.preventDefault()
                        
                        // Destino e query params
                        router.push({pathname:`/results`, query:{pokemon:inputContent}})
                    }}>
                        <input type = "text" placeholder = "Digite o Pokémon aqui" onChange = {event => setInputContent(event.target.value)} ></input>
                        <button type = "submit" disabled = {inputContent.length === 0}> Buscar </button>
                    </form>
                </Search>
            </Welcome>
        </Fundo>
    )
}
