// src/style/global.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color: #0f051d;
        --surface: #1e0b36;
        --primary: #7b2cbf;
        --secondary: #00f5b1;
        --text-color: #f0f0f0;
    }

    body.retro-mode {
        --bg-color: #0a140a;
        --surface: #142814;
        --primary: #1f3c1f;
        --secondary: #00ff00;
        --text-color: #a0ffa0;

        * {
            font-family: 'Press Start 2P', cursive !important;
            border-color: var(--secondary) !important;
        }

        /* Efeito de linhas CRT de TV antiga */
        background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
        ), #0a140a;
        background-size: 100% 4px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: "Inter", sans-serif;
        overflow-x: hidden;
        transition: background-color 0.5s ease; /* Transição suave ao mudar de tema */
    }

    .pixel-font {
        font-family: 'Press Start 2P', cursive;
    }
`;