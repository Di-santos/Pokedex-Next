/**
Funções no React representam os componentes
Com styled components, pode-se definir e estilizar tais componentes de maneira simplificada (pré-configurada)
**/ 

import styled from 'styled-components'

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`
// function Welcome(props){
//     return (
//     <p> {props.children} </p>
//     )
// }

export default function Home() {
    return (
        <Title>
            Dioguin
        </Title>
    )
}
