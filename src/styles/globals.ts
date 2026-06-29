import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* ================================ SCROLLBAR DESKTOP ================================ */

  @media (min-width: 550px) {
    /* Chrome, Edge, Safari */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* fundo da scrollbar */
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

/* barra (thumb) */
::-webkit-scrollbar-thumb {
  background-color: #244cff;
  border-radius: 20px;
  border: 2px solid transparent;
  background-clip: content-box;
}

/* hover na barra */
::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.colors.pallet.primary};
}

/* canto (quando horizontal + vertical se cruzam) */
::-webkit-scrollbar-corner {
  background: transparent;
}
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
  border-top: solid 1px ${({ theme }) => theme.colors.border.default};
  width: 100%;
  }
`
