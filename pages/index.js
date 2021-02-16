/**
Funções no React representam os componentes
Com styled components, pode-se definir e estilizar tais componentes de maneira simplificada (pré-configurada)

Componente Padrão
function Welcome(props){
    return (
    <p> {props.children} </p>
    )
}

Styled Component
const Title = styled.h1`
    font-size: 100px;
    color: ${({ theme }) => theme.colors.primary};
`
Além disso, pode-se modularizar e dar import nos componentes já estilizados, como botões, formulários, cards, etc.
**/ 

// Imports
import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/widget'
import Footer from '../src/components/footer'
import GitHub from '../src/components/github'

// Componentes
const Fundo = styled.section`
    background-image: url(${db.bg});
    flex: 1;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${db.bg});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }}
`

const Quiz = styled.div`
    width: 30%;
    padding-top: 50px;
    margin: auto 10%;
    max-width: 450px;
    @media screen and (max-width: 500px) {
        width: 90vw;
    }
`

// Default
export default function Home() {
        return (
            <Fundo>
                <Quiz>
                    <Widget>
                        <header>EvaQuiz</header>
                        
                        <h2> O quanto você sabe sobre evangelion? </h2>

                    </Widget>

                    <Widget>
                        <header>Materiais</header>

                        <ul>
                            <a target="_blank" href="https://www.netflix.com/br/title/81033445" >
                                - Assista na netflix
                            </a>

                            <a target="_blank" href="https://www.netflix.com/br/title/81033445" >
                                - Entenda o final
                            </a>

                            <a target="_blank" href="https://www.netflix.com/br/title/81033445" >
                                - Ajuda psicológica
                            </a>
                        
                        
                        </ul>
                    </Widget>
                    
                    <Footer/>
                </Quiz>
                <GitHub projectUrl = "https://github.com/di-santos" />
            </Fundo>
        )
    }

