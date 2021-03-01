/* 
    Esta prática é comum para quando precisamos, além de estilizar componentes, configurar seus states e props
    1 - Definimos a compBase, base do estilo do componente
    2 - Explicitamos as props, states ou retornos do componente 
*/

import styled from 'styled-components'

const InputBase = styled.input`
    margin-left: 30px;
    height: 50px;
    width: 350px;
    padding: 15px;
    background-color: white;
    font-family: ${({ theme})=> theme.fonts.second};
    border-radius: ${({ theme})=> theme.borderRadius};
    border-style: none;
    outline:none;
`

export default function Input({onChange, placeholder}){
    return(
        <div>
            <InputBase placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}