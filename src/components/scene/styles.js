import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding : 0;
    }
`

const Container = styled.div`
    
    display: flex;
    justify-content: center;
    width: 80%;
    margin: auto;
    margin-top: 2em;
    padding: 2em;
    border: 1px solid black;
    border-radius: 50px;

    p{
        text-align: center;
        font-family: monospace;
        font-size: 1.8em;
        font-weight:bold;           
    }

    @media (max-width: 520px){
        
        padding: 0.5em;

    }

   
`
export default Container;
