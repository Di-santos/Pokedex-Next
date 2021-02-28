import styled from 'styled-components'

const Search = styled.div`

    height: 500px;
    width: 500px;

    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme})=> theme.colors.background};
    
    input{
        height: 50px;
        width: 350px;
        background-color: white;
        font-family: ${({ theme})=> theme.fonts.second};
        border-radius: ${({ theme})=> theme.borderRadius};
        border-style: none;
    }

    button{
        height: 50px;
        width: 100px;
        font-family: ${({ theme})=> theme.fonts.second};
        border-radius: ${({ theme})=> theme.borderRadius};
        background-color: ${({ theme})=> theme.colors.search};
        border-style: none;
    }

`


export default Search