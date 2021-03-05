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
`
export default PokeGrid
    