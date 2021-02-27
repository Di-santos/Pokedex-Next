import styled from 'styled-components'

const Area = styled.div`
    height: 100vh;
    width: 100vw;

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

export default function Welcome(){
    return(
        <Area>
            <h1> PokedexAPI </h1>
            <p> Pokestats decolando na velocidade da luz! </p>
        </Area>
    )
}