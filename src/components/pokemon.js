import styled from 'styled-components'

const PokeWrapper = styled.div`
    display: flex;
    flex-direction:column;
`
export default function Pokemon(props) {
    return (
        <PokeWrapper>
            <h1>{props.pokeInfo.name.english}</h1>
            <h2>{props.pokeInfo.id}</h2>
        </PokeWrapper>
    )

}