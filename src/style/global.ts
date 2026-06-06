// src/style/global.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Press+Start+2P&display=swap');

    :root {
        --bg-color: #0f051d;
        --surface: #1e0b36;
        --primary: #7b2cbf;
        --secondary: #00ff88;
        --text-color: #f0f0f0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);
        overflow-x: hidden;
    }

    .pixel-font {
        font-family: 'Press Start 2P', cursive;
    }
`;