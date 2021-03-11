import styled from 'styled-components'

const PokeWrapper = styled.div`
    border-radius: ${({ theme})=> theme.borderRadius};
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 40px;
    height: 250px;
    width: 150px;

`
const PokeHeader = styled.div`
    display: flex;
    flex-direction:row;
    height: 52px;
    width: 152px;
    margin-top: -1px;
    margin-left: -1px;

    align-items: center;
    justify-content: space-between;

    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    background-color:black;
    font-family: ${({ theme})=> theme.fonts.main};
    border-top-left-radius: ${({ theme})=> theme.borderRadius};
    border-top-right-radius: ${({ theme})=> theme.borderRadius};
    font-size: 8px;

    h1{
        color:white;
        margin-left: 10px;
        margin-right: 10px;
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
        font-size: 12px;
        color: black;
        letter-spacing: 2px;   
    }
`

const PokeInfo = styled.div`
    height: 150px;
    width: 150px;
    background-color: red;
    border-radius: ${({ theme})=> theme.borderRadius};

    h3{
        display: flex;
        justify-content:space-between;
        letter-spacing: 1px;
        font-family: ${({ theme})=> theme.fonts.second};
        font-size: 10px;
        color: black;
        margin-right: 10px;
        margin-left: 10px;
        font-weight: 700;
    }
    strong {
        color: #F5E03D;
    }
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
                <h3>HP: <strong> {pokeStats.base.HP}</strong></h3>
                <h3>Attack: <strong> {pokeStats.base.Attack}</strong></h3>
                <h3>Defense: <strong> {pokeStats.base.Defense}</strong></h3>
                <h3>Sp. Attack: <strong> {pokeStats.base.SpAttack}</strong></h3>
                <h3>Sp. Defense: <strong> {pokeStats.base.SpDefense}</strong></h3>
                <h3>Speed: <strong> {pokeStats.base.Speed}</strong></h3>
            </PokeInfo>
        </PokeWrapper>
    )
}

/*
                <h3>HP: <strong> {pokeStats.base.HP}</strong></h3>
                <h3>Attack: <strong> {pokeStats.base.Attack}</strong></h3>
                <h3>Defense: <strong> {pokeStats.base.Defense}</strong></h3>
                <h3>Sp. Attack: <strong> {pokeStats.base.SpAttack}</strong></h3>
                <h3>Sp. Defense: <strong> {pokeStats.base.SpDefense}</strong></h3>
                <h3>Speed: <strong> {pokeStats.base.Speed}</strong></h3>
*/