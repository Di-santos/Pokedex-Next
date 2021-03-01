/* 
    Esta prática é comum para quando precisamos, além de estilizar componentes, configurar seus states e props
    1 - Definimos a compBase, base do estilo do componente
    2 - Explicitamos as props, states ou retornos do componente 
*/

import styled from 'styled-components'

const ButtonBase = styled.button`
    height: 50px;
    width: 100px;
    font-family: ${({ theme})=> theme.fonts.second};
    border-radius: ${({ theme})=> theme.borderRadius};
    background-color: ${({ theme})=> theme.colors.search};
    border-style: none;
    outline:none;
    cursor:pointer;
`

export default function Button({type, disabled, onClick, ...props}){
    return(
        <div>
            <ButtonBase disabled={disabled}type={type} onClick={onClick} disabled={disabled}>{props.children}</ButtonBase>
        </div>
    )
}