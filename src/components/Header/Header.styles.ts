// src/components/Header/Header.styles.ts
import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
    background-color: var(--bg-color);
    border-bottom: 4px solid var(--primary);
    padding: 1.5rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const LogoWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoText = styled.h1`
    font-family: 'Press Start 2P', system-ui;
    color: var(--secondary);
    font-size: 1.5rem;
    margin: 0;
    cursor: pointer;
    text-shadow: 2px 2px 0px var(--primary);
    
    a {
        text-decoration: none;
        color: inherit;
    }

    @media (max-width: 425px) {
        font-size: 1.2rem;
    }
`;

const popAnimation = keyframes`
    0% { transform: translateX(-50%) translateY(10px) scale(0.8); opacity: 0; }
    50% { transform: translateX(-50%) translateY(-5px) scale(1.2); opacity: 1; }
    100% { transform: translateX(-50%) translateY(0) scale(1); opacity: 1; }
`;

export const ComboCounter = styled.div<{ $isMilestone: boolean }>`
    position: absolute;
    top: 110%; /* Fica logo abaixo da palavra Indiezone */
    left: 50%;
    font-family: 'Press Start 2P', cursive;
    /* Muda a cor de vermelho para verde se for um marco especial */
    color: ${(props) => (props.$isMilestone ? 'var(--secondary)' : '#ff0055')};
    font-size: ${(props) => (props.$isMilestone ? '0.8rem' : '0.6rem')};
    text-shadow: 2px 2px 0px black;
    white-space: nowrap;
    pointer-events: none;
    
    /* A animação roda toda vez que a key do React (no index.tsx) muda */
    animation: ${popAnimation} 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`;