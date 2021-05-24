import styled from 'styled-components'

const PokeGrid = styled.div`

    margin-top:16vh;
    min-height: 80vh;
    max-width: 90vw;

    margin-left:5vw;

    display: grid;
    grid-template-columns: repeat(6, 1fr);

    padding:40px;
    background-color: ${({ theme})=> theme.colors.background};

    @media (max-width: 700px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

`
export default PokeGrid
    