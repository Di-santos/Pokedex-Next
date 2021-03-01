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
    
    form{
        display: flex;
        flex-direction: row
    }
    button{
        margin-left: 30px;
    }
`
export default Header