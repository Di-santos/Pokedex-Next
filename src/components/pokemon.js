import styled from 'styled-components'

const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme})=> theme.colors.background};
    height: 300px;
    width: 100px;

    h1{
        font-size: 20px;
        color: black;
    }
    h2{
        font-size: 10px;
        color: black;   
    }
`
export default Pokemon