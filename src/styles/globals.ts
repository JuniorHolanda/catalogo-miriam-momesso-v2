import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.medium};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style-type: none;
  }

  input {
    border: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  hr {
  all: unset;       
  display: block;
  height: 1px;
  border-top: solid 1px ${({theme}) => theme.colors.border.default};
  width: 100%;
  }
`;
