import styled, { keyframes } from "styled-components";

// Animação que faz o Bit piscar os olhos nativamente pelo CSS
const mascotBlink = keyframes`
    0%, 90%, 100% {
        content: "[O_O]";
    }
    93%, 97% {
        content: "[-_-]";
    }
`;

// Animação para o Bit flutuar levemente na tela
const float = keyframes`
    0%, 100% {
        transform: translateY(0);
        text-shadow: 0 0 15px var(--secondary);
    }
    50% {
        transform: translateY(-10px);
        text-shadow: 0 0 30px var(--secondary);
    }
`;

// Animação de piscar para o texto "LOADING..."
const textBlink = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(15, 5, 29, 0.95);
    backdrop-filter: blur(4px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;

export const MascotText = styled.div`
    font-family: 'Press Start 2P', cursive !important;
    font-size: 3.5rem;
    color: var(--secondary);
    margin-bottom: 2.5rem;
    user-select: none;
    animation: ${float} 3s ease-in-out infinite;

    &::after {
        content: "[O_O]";
        animation: ${mascotBlink} 4s infinite;
    }

    @media (max-width: 425px) {
        font-size: 2.5rem;
    }
`;

export const LoadingText = styled.h2`
    color: var(--text-color);
    font-size: 1rem;
    letter-spacing: 2px;
    text-shadow: 2px 2px 0px var(--primary);
    animation: ${textBlink} 1.5s infinite;

    @media (max-width: 425px) {
        font-size: 0.8rem;
    }
`;