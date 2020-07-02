import { createGlobalStyle } from 'styled-components';

import backGroundsvg from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto',sans-serif;
  }

  html, body, #root {
    min-height: 100%;
  }

  *,input,button{
    border: 0;
    outline :0;
    font-family: 'Roboto',sans-serif;
  }

  .App{
    min-height: 100%;

    background: url(${backGroundsvg}) #0f0329;

    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`