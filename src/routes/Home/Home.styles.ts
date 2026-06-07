import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const HeroSection = styled.section<{ $bgImage: string }>`
    position: relative;
    width: 100%;
    height: 60vh;
    min-height: 400px;
    background-image: url(${(props) => props.$bgImage});
    background-size: cover;
    background-position: top center;
    background-attachment: fixed; /* Efeito Parallax simples */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background-image 1s ease-in-out;

    /* O overlay escuro com gradiente para a imagem não engolir o texto */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            rgba(15, 5, 29, 0.6) 0%,
            rgba(15, 5, 29, 0.9) 80%,
            var(--bg-color) 100%
        );
        z-index: 1;
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 2;
    padding: 0 2rem;
    max-width: 800px;

    h2 {
        font-size: 3rem;
        color: var(--text-color);
        margin-bottom: 1rem;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);

        span {
            color: var(--secondary);
            text-shadow: 2px 2px 0px var(--primary);
        }

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1.2rem;
        color: #ccc;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
    }
`;

export const Section = styled.section`
    padding: 4rem 5%;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
`;

export const SectionTitle = styled.h2`
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: "";
        display: inline-block;
        width: 8px;
        height: 1.5rem;
        background-color: var(--secondary);
    }
`;

export const GameGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 2rem;
`;