import styled from 'styled-components'

const Header = styled.header`
    position: absolute;
    top: 0;

    width: 100vw;
    height: 12vh;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: black;
    
    input{
        display: flex;
        flex-direction: row;

        @media (max-width: 500px){
            width:180px;
        }
    }
    
`
export default Header