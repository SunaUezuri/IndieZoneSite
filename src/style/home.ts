import styled from "styled-components";

export const Container = styled.main`
    background-image: url("../../img/women-cell.png");
    background-repeat: no-repeat;
    background-size: 70% clamp(100%, 180%, 180%);
    background-position: right top;
    object-fit: contain;
    font-family: "Raleway", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @media screen and(max-width: 1024px) {
        padding: 0 4rem;
    }

    @media screen and(max-width: 768px){
        padding: 0 2rem;
        background-size: auto 150%;
    }

    @media screen and(max-width: 425px){
        padding: 0 1rem
    }

    @media screen and(max-width: 375px){
        background-size: 100% clamp(100%, 180%, 180%);
    }
`

export const Sessao = styled.section`
    background-color: var(--primary);
    padding: 2rem 0;

    .estiloBotao{
        display: inline-block;
        padding: .4rem;
        margin: 1rem;

        color: black;
        font-size: 1.6rem;
        font-weight: 600;
        text-decoration: none;
        text-align: center;

        border: 3px solid black;
        border-radius: 12px;

        transition: 200ms;

        &:hover{
            background-color: black;
            color: var(--primary);
            transition: 200ms;
        }

        @media (max-width: 426px){
            font-size: 1rem;
            padding: .3rem;
        }

        @media (max-width: 320px){
            font-size: .8rem;
        }
        

        
    }

    @media screen and (max-width: 425px){
        padding: 0;
    }
`

export const SubTitulo = styled.h3`
    font-weight: 300;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding-top: 2rem;


    @media (max-width: 425px) {
        text-align: left;
        font-size: 1rem;
    }

`

export const TituloMain = styled.h1`
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: bold;

    @media screen and (max-width: 1024px){
        font-size: 2rem;
    }

    @media screen and (max-width: 768px){
        font-size: 2rem;
    }

    @media screen and (max-width: 425px){
        
        font-size: 1rem;
    }
    
`

export const ParagrafoMain = styled.p`
    margin-bottom: 3rem;
`

export const DivDireita = styled.div`
    width: 30%;
`



export const TituloSessao = styled.h3`
    color: var(--text-color);
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 426px){
        font-size: 1.4rem;
    }
`

export const Passos1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 426px){
        align-items: left;
        justify-content: left;
    }
`

export const ImagemCelular = styled.img`
    width: 100%;
    max-width: 28rem;

    @media (max-width: 768px){
        width: 50%;
    }

    @media (max-width: 426px){
        width: 40%;
    }

    @media (max-width: 320px){
        padding-right: 0;
    }
`

export const Lista = styled.ol`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Item = styled.li`
    padding: 1rem;
  
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;

    border: 2px solid var(--text-color);
    border-radius: 12px;

    @media (max-width: 426px){
        padding: .8rem;
        font-size: 1rem;
    }

    @media (max-width: 376px){
        padding: .6rem;
    }

    @media (max-width: 320px){
        font-size: .7rem;
        font-weight: 400;
    }
`
