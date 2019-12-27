import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
    background: 000;
  }

  body {
    background-color: #f2f2f2;
    color: #1c1e21;
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`;