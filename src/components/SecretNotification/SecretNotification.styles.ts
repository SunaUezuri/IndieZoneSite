import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
    0% { transform: translate(-50%, -100px); opacity: 0; }
    15% { transform: translate(-50%, 20px); opacity: 1; }
    85% { transform: translate(-50%, 20px); opacity: 1; }
    100% { transform: translate(-50%, -100px); opacity: 0; }
`;

export const NotificationBox = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000000;
    border: 3px dashed var(--secondary);
    padding: 1rem 2rem;
    z-index: 10001; /* Fica acima do loader */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
    
    animation: ${slideDown} 4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

    h4 {
        color: var(--secondary);
        font-size: 0.8rem;
        margin: 0;
    }

    p {
        color: #fff;
        font-size: 0.6rem;
        margin: 0;
    }
`