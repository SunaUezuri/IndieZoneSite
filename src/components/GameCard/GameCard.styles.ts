import styled from "styled-components";

export const Card = styled.article`
    background-color: var(--surface);
    border: 2px solid #2a164a;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover {
        transform: translateY(-5px);
        border-color: var(--primary);
        box-shadow: 0 10px 20px rgba(123, 44, 191, 0.4);
    }
`;

export const CardImage = styled.div<{ $bgUrl: string }>`
    width: 100%;
    height: 180px;
    background-image: url(${(props) => props.$bgUrl});
    background-size: cover;
    background-position: center;
    background-color: #111; /* Fallback */
`;

export const CardContent = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Title = styled.h3`
    font-size: 1.1rem;
    color: var(--text-color);
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Developer = styled.span`
    font-size: 0.8rem;
    color: #aaa;
    margin-bottom: 1rem;
`;

export const FooterCard = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 0.8rem;
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: var(--secondary);
    font-weight: bold;
    font-size: 0.9rem;

    svg {
        color: #ffd700;
    }
`;

export const Genres = styled.div`
    font-size: 0.7rem;
    color: var(--primary);
    background-color: rgba(123, 44, 191, 0.2);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-weight: 600;
`;