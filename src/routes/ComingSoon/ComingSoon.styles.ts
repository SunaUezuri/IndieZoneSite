import styled, { keyframes } from "styled-components";

// Animação clássica de "Press Start" piscando
const blink = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`;

export const ComingSoonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6rem 2rem;
    text-align: center;
    flex: 1; 
`;

export const Title = styled.h1`
    color: var(--secondary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 3px 3px 0px var(--primary);

    @media (max-width: 426px) {
        font-size: 1.5rem;
        text-shadow: 2px 2px 0px var(--primary);
    }
`;

export const Subtitle = styled.p`
    color: #aaa;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    line-height: 1.6;

    @media (max-width: 426px) {
        font-size: 1rem;
    }
`;

export const LoadingText = styled.span`
    color: var(--primary);
    font-size: 1rem;
    animation: ${blink} 1.5s infinite;
    margin-bottom: 4rem;

    @media (max-width: 426px) {
        font-size: 0.8rem;
    }
`;

export const BackButton = styled.button`
    background-color: transparent;
    color: var(--secondary);
    border: 2px solid var(--secondary);
    padding: 1rem 2rem;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--secondary);
        color: var(--bg-color);
        box-shadow: 0 0 15px var(--secondary);
    }
`;