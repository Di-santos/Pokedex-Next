import styled from 'styled-components'

const PokeGrid = styled.div`
    position: fixed;
    left: 50%;
    margin-top:16vh;
    transform: translate(-50%);

    width: 90vw;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr) 100px;

    padding:40px;
    background-color: ${({ theme})=> theme.colors.background};

    @media (max-width: 500px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

`
export default PokeGrid
    