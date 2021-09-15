import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  html {
    font-family: 'Roboto', Helvetica, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;

    @media only screen and (max-width: 480px) {
      html {
        font-size: 100%;
      }
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Roboto', Helvetica, sans-serif;
      color: hsla(0, 0%, 0%, 0.8);
      background-color: #F2F2F2;
      transition: .3s all;
      font-weight: normal;
      word-wrap: break-word;
      font-kerning: normal;
      -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';

      ul {
        list-style: none;
      }

      a {
        text-decoration: none;
      }
    }
  }
`;