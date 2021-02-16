import styled from 'styled-components'

const Widget = styled.div`
    display: flex;
    flex-direction: column;
    width:30vw;
    margin-top: 18px;
    margin-bottom: 18px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: #FFFFFF;
    overflow: hidden;
    @media screen and (max-width: 500px) {
        width: 75vw;
        a{
            color: black;
            text-decoration: none;
            padding: 6px;
        }
    }
    

    header {
        font-family: ${({ theme }) => theme.fonts.main};
        font-size: 28px;
        color: #FFFFFF;
        padding: 10px;
        background-color:${({ theme }) => theme.colors.primary}
    }

    h2 {
        padding: 20px;
        font-family: ${({ theme }) => theme.fonts.second};
        font-weight: 600;
        font-size: 18px;
        line-height: 1;
    }

    ul{ 
        display: flex;
        flex-direction: column;
        font-family: ${({ theme }) => theme.fonts.second};
        font-weight: 500;
        font-size: 18px;
        line-height: 1;
    }

    a{
        padding: 6px;
        color: black;
        text-decoration: none;
    }
    
    a:hover{
        color: gray;
    }
`

export default Widget