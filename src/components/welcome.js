import styled from 'styled-components'

const Welcome = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 770px){
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 40vh;
        width: 90vw;

    }

    @media (max-width: 770px){
        width:100vw;
        margin-top:50px;

    }

    h1{
        font-size: ${({ theme})=> theme.fonts.scale.title};
        font-family: ${({ theme})=> theme.fonts.main};
        color: white;

    }
    p{
        font-size: ${({ theme})=> theme.fonts.scale.subtitle};
        font-family: ${({ theme})=> theme.fonts.second};
        color: white;
    }
    
`

export default Welcome