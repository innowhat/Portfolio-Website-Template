import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        font-size: 18px;
        font-family: "Roboto", sans-serif;
        font-weight: 100; 
        background-image: #fff;
        color:#000;
        height:100%
        
        a{
            color: ${({ theme }) => theme.accent};
        }
        }`;

export default GlobalStyle;
