import styled, { keyframes } from "styled-components";

// Animação de pulsar para glows (sombras neon)
const neonPulse = keyframes`
    0%, 100% {
        box-shadow: 0 0 10px rgba(0, 245, 177, 0.4);
    }
    50% {
        box-shadow: 0 0 20px rgba(0, 245, 177, 0.7);
    }
`;

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    flex: 1;
    text-align: center;
    background-color: #0f051d; /* Fundo escuro oficial */
    color: #eee; /* Texto off-white padrão */
`;

export const Title = styled.h1`
    color: #00f5b1; /* Verde/Ciano Neon Principal */
    font-size: 3.5rem;
    margin-bottom: 0.8rem;
    text-shadow: 0 0 10px rgba(0, 245, 177, 0.6); /* Efeito neon de brilho */
    letter-spacing: 2px;
    
    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`;

export const Subtitle = styled.p`
    color: #aaa; /* Cinza para o corpo de texto */
    font-size: 1rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
    line-height: 1.6;
`;

export const ScoreBoard = styled.div`
    display: flex;
    justify-content: space-between;
    width: 600px;
    max-width: 90vw;
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    color: #eee; /* Off-white para os números */

    .player { color: #00f5b1; text-shadow: 0 0 8px rgba(0, 245, 177, 0.5); }
    .ai { color: #eee; } /* AI mais neutro ou usar um roxo neon para contraste */
`;

export const GameCanvas = styled.canvas`
    background-color: rgba(123, 44, 191, 0.05); /* Fundo sutil com roxo da borda */
    border: 3px solid #7b2cbf; /* Borda Roxo Neon de Apoio */
    border-radius: 8px;
    max-width: 100%;
    cursor: none; /* Esconde o cursor do mouse */
    animation: ${neonPulse} 2s infinite ease-in-out; /* Aplica o pulsar neon */
`;

export const BackButton = styled.button`
    margin-top: 2.5rem;
    background-color: #00f5b1; /* Fundo Verde/Ciano Neon Principal */
    color: #0f051d; /* Texto no roxo do fundo */
    border: 2px solid #00f5b1;
    border-radius: 4px;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;

    &:hover {
        background-color: transparent;
        color: #00f5b1;
        box-shadow: 0 0 15px rgba(0, 245, 177, 0.7);
    }
`;