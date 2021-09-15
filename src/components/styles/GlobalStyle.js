import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-size: 14px;
    font-family: 'Hind', sans-serif;
  }
`;

export default GlobalStyle;