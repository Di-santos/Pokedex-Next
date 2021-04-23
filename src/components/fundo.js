import styled from 'styled-components'

const Fundo = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex: 1;


    background-color: ${({ theme})=> theme.colors.background};
    
`
export default Fundo
