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


// Imports
import styled from 'styled-components'
import design from '../design.json'
import Welcome from '../src/components/welcome'

// Componentes
const Fundo = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme})=> theme.colors.background};
    
`

// Default
export default function Home() {
    return (
        <Fundo>
            <Welcome/>
        </Fundo>
    )
}
