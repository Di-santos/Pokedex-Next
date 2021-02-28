import styled from 'styled-components'

const Fundo = styled.div`
    min-height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme})=> theme.colors.background};
    
`
export default Fundo