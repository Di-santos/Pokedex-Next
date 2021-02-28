import styled from 'styled-components'

const Welcome = styled.div`
    position: absolute;
    height: 100px;
    width: 500px;

    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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