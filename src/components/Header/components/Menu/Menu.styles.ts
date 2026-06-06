import styled from "styled-components";

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const NavContainer = styled.nav<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    /* Estilo dos links normais */
    a {
        text-decoration: none;
        color: var(--text-color);
        font-size: 0.9rem;
        font-weight: 600;
        transition: color 0.3s ease;

        &:hover {
            color: var(--secondary);
        }
    }

    /* Estilo do botão de Área Dev/Login */
    .nav-button {
        font-family: 'Press Start 2P', system-ui;
        color: var(--bg-color);
        background-color: var(--secondary);
        padding: 0.8rem 1.5rem;
        border: none;
        box-shadow: 4px 4px 0px 0px #00a357;
        font-size: 0.7rem;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform 0.1s ease;

        &:active {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px 0px #00a357;
        }
        
        &:hover {
            color: var(--bg-color);
        }
    }

    /* Mobile Sidebar */
    @media (max-width: 768px) {
        ul {
            position: fixed;
            top: 0;
            right: ${(props) => (props.$isOpen ? "0" : "-100%")};
            width: 250px;
            height: 100vh;
            background-color: var(--surface);
            flex-direction: column;
            justify-content: center;
            border-left: 4px solid var(--primary);
            transition: right 0.4s ease-in-out;
            z-index: 99;
        }
    }
`;

export const MobileIcon = styled.div`
    display: none;
    cursor: pointer;
    z-index: 100;

    @media (max-width: 768px) {
        display: block;
    }
`;