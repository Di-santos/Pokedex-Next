import styled from 'styled-components'

const PokeWrapper = styled.div`
    border-radius: ${({ theme})=> theme.borderRadius};
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 40px;
    height: 250px;
    width: 150px;

    h3{
        font-family: ${({ theme})=> theme.fonts.second};
        font-size: 10px;
        color: black;
    }
`
const PokeHeader = styled.div`
    display: flex;
    flex-direction:row;
    height: 50px;
    width: 150px;
    align-items: center;
    justify-content: space-between;

    background-color:black;
    font-family: ${({ theme})=> theme.fonts.main};
    border-top-left-radius: ${({ theme})=> theme.borderRadius};
    border-top-right-radius: ${({ theme})=> theme.borderRadius};
    font-size: 10px;

    h1{
        color:white;
        margin-left: 6px;
        margin-right: 6px;
    }
`
const PokeType = styled.div`
    height: 50px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    h2{
        font-family: ${({ theme})=> theme.fonts.second};
        font-size: 15px;
        color: black;   
    }
`

const PokeInfo = styled.div`
    height: 150px;
    width: 150px;
    background-color: red;
    border-radius: ${({ theme})=> theme.borderRadius};
`

export default function Pokemon({pokeStats}){
    return (
        <PokeWrapper>
            <PokeHeader>
                <h1>{pokeStats.name.english}</h1>
                <h1>{pokeStats.id}</h1>
            </PokeHeader>

            <PokeType>
                <h2>{pokeStats.type}</h2>
            </PokeType>

            <PokeInfo>
                <h3>HP: {pokeStats.base.HP}</h3>
                <h3>Attack: {pokeStats.base.Attack}</h3>
                <h3>Defense: {pokeStats.base.Defense}</h3>
                <h3>Sp. Attack: {pokeStats.base.SpAttack}</h3>
                <h3>Sp. Defense: {pokeStats.base.SpDefense}</h3>
                <h3>Speed: {pokeStats.base.Speed}</h3>
            </PokeInfo>
        </PokeWrapper>
    )
}