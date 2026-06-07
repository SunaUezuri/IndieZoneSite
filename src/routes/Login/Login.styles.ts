import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 200px); /* Ocupa a tela descontando Header e Footer */
    padding: 2rem;
`;

export const LoginCard = styled.div`
    background-color: var(--surface);
    border: 2px solid var(--primary);
    border-radius: 8px;
    padding: 3rem;
    width: 100%;
    max-width: 450px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const LoginHeader = styled.div`
    text-align: center;
    
    h1 {
        color: var(--secondary);
        font-size: 2rem;
        margin-bottom: 0.5rem;
        text-shadow: 2px 2px 0px var(--primary);
    }

    p {
        color: #aaa;
        font-size: 0.9rem;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-size: 0.8rem;
        color: var(--text-color);
        font-weight: 600;
        letter-spacing: 1px;
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;

    svg {
        position: absolute;
        left: 15px;
        color: #888;
        font-size: 1.2rem;
        transition: color 0.3s ease;
    }

    input {
        width: 100%;
        background-color: rgba(15, 5, 29, 0.5);
        border: 2px solid #333;
        border-radius: 4px;
        padding: 1rem 1rem 1rem 3rem;
        color: var(--text-color);
        font-size: 1rem;
        transition: all 0.3s ease;

        &::placeholder {
            color: #666;
        }

        &:focus {
            outline: none;
            border-color: var(--secondary);
            box-shadow: 0 0 10px rgba(0, 245, 177, 0.2);
        }

        /* Quando o input foca, o ícone ao lado também acende */
        &:focus + svg, &:not(:placeholder-shown) + svg {
            color: var(--secondary);
        }
    }
`;

export const SubmitButton = styled.button`
    background-color: var(--secondary);
    color: var(--bg-color);
    border: none;
    border-radius: 4px;
    padding: 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;

    &:hover {
        background-color: transparent;
        color: var(--secondary);
        border: 2px solid var(--secondary);
        box-shadow: 0 0 15px rgba(0, 245, 177, 0.5);
    }
`;

export const LoginFooter = styled.div`
    text-align: center;
    font-size: 0.85rem;
    color: #aaa;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    a {
        color: var(--secondary);
        text-decoration: none;
        transition: text-shadow 0.3s ease;

        &:hover {
            text-shadow: 0 0 8px var(--secondary);
        }
    }
`;