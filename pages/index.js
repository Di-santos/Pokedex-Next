/**
Funções no React representam os componentes
Com styled components, pode-se definir e estilizar tais componentes de maneira simplificada (pré-configurada)

Componente Padrão
function Welcome(props){
    return (
    <p> {props.children} </p>
    )
}

**/ 

import styled from 'styled-components'
import db from '../db.json'

// Styled Components
const Fundo = styled.section`
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: center;
`
const Title = styled.h1`
    font-size: 100px;
    color: ${({ theme }) => theme.colors.primary};
`
const Quiz = styled.div`
    width: 20%;
    padding-top: 50px;
    margin: auto 10%;
    max-width: 300px;
`
const Widget = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: #1C1814;
    overflow: hidden;

    h1,h2,h3{
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        line-height: 1;
    }
`

export default function Home() {
        return (
            <Fundo>
                <Quiz>
                    <Widget>
                        <Title>
                            Evangelion
                        </Title>
                    </Widget>
                </Quiz>
            </Fundo>
        )
    }

