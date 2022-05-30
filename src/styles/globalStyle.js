import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    min-height: 100%;
    background-color: #fff;
  }
  
  html, body, #__next {
    width: 100%;
    background-color: #fff;
  }
  body {
    overflow-x: hidden;
    font-family: 'Noto Sans KR', sans-serif;
  }
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    color: #111;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
  
`;

export default GlobalStyle;
