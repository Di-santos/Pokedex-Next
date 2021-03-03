import styled from 'styled-components'

const PokeGrid = styled.div`
    position: fixed;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -80%);
    width: 90vw;
    min-height: 80vh;
    display: grid;
    grid-template-columns:1fr 50px 1fr 50px 1fr 50px 1fr 50px 1fr 50px 1fr 50px 1fr;
    background-color:white;
`
export default PokeGrid
    