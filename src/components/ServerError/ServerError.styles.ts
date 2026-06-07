import styled, { keyframes } from "styled-components";

// Animação dramática do texto principal (Surgindo e crescendo lentamente)
const dramaticFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

// Animação simples de fade in para os elementos secundários
const fadeInDelay = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const ErrorContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10000;
`;

export const DeathText = styled.h1`
    font-family: 'Times New Roman', Times, serif; 
    color: #ff0033;
    letter-spacing: 15px;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(255, 0, 51, 0.4);
    
    opacity: 0; /* Começa invisível */
    animation: ${dramaticFadeIn} 5s ease-out forwards; /* Animação longa de 5 segundos */

    @media (max-width: 768px) {
        font-size: 3rem;
        letter-spacing: 8px;
    }
`;

export const Subtitle = styled.p`
    color: #888;
    font-size: 1.2rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    
    opacity: 0;
    animation: ${fadeInDelay} 2s ease-in forwards 3s; 
`;

export const RespawnButton = styled.button`
    background-color: transparent;
    color: #aaa;
    border: 1px solid #555;
    padding: 1rem 2.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.4s ease;
    
    opacity: 0;
    /* Aparece junto com o subtítulo */
    animation: ${fadeInDelay} 2s ease-in forwards 3.5s; 

    &:hover {
        color: #ff0033;
        border-color: #ff0033;
        box-shadow: 0 0 15px rgba(255, 0, 51, 0.5);
    }
`;