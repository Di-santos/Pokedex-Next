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

    form{
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 500px){
                flex-direction: column;
            }
    }

    input{
        height: 50px;
        width: 350px;
        padding: 15px;
        background-color: white;
        font-family: ${({ theme})=> theme.fonts.second};
        border-radius: ${({ theme})=> theme.borderRadius};
        border-style: none;
        outline:none;

        @media (max-width: 768px){
            width: 200px;
            margin-bottom:10px;
        }
    }

    button{
        height: 50px;
        width: 100px;
        font-family: ${({ theme})=> theme.fonts.second};
        border-radius: ${({ theme})=> theme.borderRadius};
        background-color: ${({ theme})=> theme.colors.search};
        border-style: none;
        outline:none;
        cursor:pointer;

    }

    button:hover{
        background-color: ${({ theme})=> theme.colors.searchHover};
    }
`


export default Search