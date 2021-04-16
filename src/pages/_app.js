/*
O _app é uma ferramenta do Next que permite um maior controle de escopo
do css da aplicação, definindo temas reutilizáveis (quase um super root do css padrão)

Desta forma, você pode predefinir, centralizar e conectar todo o css do seu projeto, 
desde cores, border-radius, fontes e até mesmo conteúdo bruto em si

Além disso, você pode importar temas e variáveis prontas a partir de um JSON externo
e incluir de maneira simples neste arquivo, como com o db.json (não é exclusivo do
next ou do SC, mas eles favorecem esta prática)

*/

import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import design from '../../design.json'

// Estilo global
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  section{
    min-height: 100vh;
    min-width: 100vw;
  }

  body, html {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

// Tema da Aplicação
const theme = design.theme

// Instanciação (troca tema com global - global dentro de themeprovider)
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat&display=swap" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />   
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
