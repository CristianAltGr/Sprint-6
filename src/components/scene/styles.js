import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding : 0;
    }
`

export const Card = styled.div`

position: absolute;
	
	width: 100%;
	height: 100%;
	display: flex;
    flex-direction:column;
	gap: 40px;
	justify-content: center;
	background: #61ee97;
	
	
	h1 {
        font-size: 4em;
		text-align: center;
	}
	
	button {
        margin-left:auto;
        margin-right: auto;
        width: 100vh;
		padding: 2rem;
		font-size: 1.8rem;
        border-radius: 80px;

        :hover{
            background-color: #eff16e;
            font-size: 3rem;
            transition: 1s;
        }
	}
`

const Container = styled.div`
    
    display: flex;
    justify-content: center;
    background-color: ${({actived})=> actived ? 'pink' : 'white'};
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

export const Buttons = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    column-gap: 40px;
    padding: auto;
    margin: auto;
    margin-top: 2em;
`
export const ButtonS = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 100%; 
    background-color: white;
    text-align: center;
    cursor: pointer;
    
    :hover{
        background-color: pink;
    }

    p{        
        font-family: monospace;
        text-align: center;
        font-size: 3em;     
    }  
    
    @media (max-width: 520px){ 
        height: 8vh;
        width: 40%;
        font-size: 0.6em;
    }  
`
export default Container;
