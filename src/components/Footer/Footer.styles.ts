import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--surface);
    border-top: 4px solid var(--primary);
    padding: 3rem 5% 1.5rem;
    color: var(--text-color);
    margin-top: auto; /* Empurra o footer para o final da página */
`;

export const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto 3rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

export const BrandSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        align-items: center;
    }

    h2 {
        color: var(--secondary);
        font-size: 1.2rem;
        text-shadow: 2px 2px 0px var(--primary);
        margin: 0;
    }

    p {
        color: #aaa;
        font-size: 0.9rem;
        line-height: 1.5;
        max-width: 250px;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;

    a {
        color: var(--text-color);
        transition: transform 0.2s ease, color 0.2s ease;

        &:hover {
            color: var(--secondary);
            transform: translateY(-3px); /* Leve pulinho ao passar o mouse */
        }
    }
`;

export const LinksSection = styled.div`
    h3 {
        color: var(--secondary);
        font-size: 0.8rem;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    a {
        color: #aaa;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.2s ease, padding-left 0.2s ease;

        &:hover {
            color: var(--secondary);
            padding-left: 5px; /* Efeito de seta apontando */
        }
    }
`;

export const FooterBottom = styled.div`
    text-align: center;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(123, 44, 191, 0.3); /* Linha roxa translúcida */
    
    p {
        color: #666;
        font-size: 0.8rem;
    }

    .highlight {
        color: var(--secondary);
        font-weight: bold;
    }
`;

export const SecretButton = styled.span`
    color: var(--secondary);
    font-weight: bold;
    cursor: pointer;
    transition: text-shadow 0.2s;

    &:hover {
        text-shadow: 0 0 8px var(--secondary);
    }
`;

export const HallOfFame = styled.div<{ $show: boolean }>`
    overflow: hidden;
    max-height: ${(props) => (props.$show ? "500px" : "0")};
    opacity: ${(props) => (props.$show ? "1" : "0")};
    transition: all 0.5s ease-in-out;
    background-color: var(--bg-color);
    border: ${(props) => (props.$show ? "2px dashed var(--primary)" : "none")};
    border-radius: 8px;
    margin-top: ${(props) => (props.$show ? "1.5rem" : "0")};
    padding: ${(props) => (props.$show ? "1.5rem" : "0")};
    text-align: left;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    h4 {
        color: var(--secondary);
        margin-bottom: 1rem;
        text-align: center;
    }

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        font-size: 0.8rem;
        color: #aaa;

        @media (max-width: 425px) {
            grid-template-columns: 1fr;
            text-align: center;
        }
    }

    li::before {
        content: "⭐ ";
    }
`;