'use client';

import { rotatePendulum } from "@/styles/animations";
import { borderRadius, flex, font, gap, padding } from "@/styles/mixins";
import styled from "styled-components";

export const SWrapper = styled.main`
    position: relative;
    ${flex({})}
    width: 100%;
    height: 90dvh;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background.base};
`;

export const SBrutalSymbol = styled.span`
    position: absolute;
    top: -100%;
    left: -40%;
    z-index: 0;
    rotate: 55deg;
    scale: 110%;
    animation: ${rotatePendulum} 200s linear alternate-reverse infinite;
`;

export const SSection = styled.section`
    display: grid;
    z-index: 1;
    grid-template: 1fr 1fr 2fr / 1fr auto;
    justify-self: center;
    ${gap({spaceKey: 'lg'})}
    ${padding({spaceKey:'lg'})}
    width: 70%;
    height: 100%;
    `;

export const SGallery = styled.div`
    grid-area: 1 / 1 / 2 / 2 ;
    ${gap({spaceKey: 'md'})}
    display: flex;
    flex-wrap: wrap;
    grid-template: 1fr 1fr / 1fr 1fr;
    width: 100%;
    height: 100%;

    div{
        display: flex;
        flex: 1 1 48%;
        max-height: 220px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 30px;
        }
    }
`;

export const SMainImg = styled.div`
    grid-area: 1 / 2 / 3 / 3;
    width: 100%;
    height: 100%;
    max-height: 600px;
    

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        border-radius: 30px;
    }
`;

export const SContent = styled.div`
    position: relative;
    ${flex({direction: 'column', align: 'start'})};
    ${gap({spaceKey: 'md'})}
    ${borderRadius({radiusKey:'md'})}
    grid-area: 2 / 1 / 4 / 2 ;
    backdrop-filter: blur(30px);
    border: solid 1.5px ${({ theme }) => theme.colors.opacity.base};
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.opacity.base};
`;

export const STextContent = styled.div`
    ${flex({direction:'column', align:'start', justfy:'space-between'})};
    height: 100%;
    ${gap({spaceKey:'md'})}
    ${padding({spaceKey:'lg'})}

    h1 {
        ${font({fontKey: 'primary', sizeKey: 'md'})}
        color: ${({theme}) => theme.colors.title.secondary};
        font-weight: 100;
        text-transform: uppercase;
        height: 50%;
    }

    p {
        ${font({fontKey: 'secondary', sizeKey: 'sm'})}
        color: ${({ theme }) => theme.colors.text.reverseText};
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 1em;
        height: 50%;
        width: 70%;
        justify-content: ce;
        
        &::first-letter {
            text-transform: uppercase;
        }
    }
`;

export const SBtnContent = styled.div `
    ${flex({align: 'end', justfy: 'end'})}
    ${gap({spaceKey: 'md'})}
    ${padding({spaceKey: 'md'})}
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.background.high};

    
    button {
        ${flex({})}
        ${font({fontKey: 'secondary', sizeKey: 'sm'})}
        ${gap({spaceKey: 'md'})}
        font-weight: 600;
        padding: 5px 15px;
        background-color: ${({ theme}) => theme.colors.link.primary};
        color: ${({ theme}) => theme.colors.text.reverseText};
        border-radius: 10px;
        transition: all.2s ease-in-out;

        &:hover {
            background-color: ${({ theme}) => theme.colors.link.activePrimary};
            color: ${({ theme}) => theme.colors.text.reverseText};
        }
    }
`;

export const SInfo = styled.div`
    grid-area: 3 / 2 / 4 / 3 ;
    ${flex({ direction: "column", align: 'start'})};
    ${borderRadius({radiusKey:'md'})}
    width: 100%;
    height: 100%;
    border: solid 1px ${({ theme }) => theme.colors.opacity.primary};
    background-color: ${({ theme }) => theme.colors.opacity.base};
    backdrop-filter: blur(30px);
    overflow: hidden;
`;

export const SType = styled.div`
    ${flex({justfy:'start', align:'center'})}
    ${padding({spaceKey:'md'})}
    background-color: ${({ theme }) => theme.colors.background.high};
    width: 100%;
    height: fit-content;
    
    h2 {
        ${flex({})}
        ${font({fontKey:'secondary', sizeKey:'sm'})}
        color: ${({ theme }) => theme.colors.title.reverse};
        font-weight: 600;
        letter-spacing: 1px;
        height: 100%;
    }
`;

export const ScontainerTag = styled.div`
    ${flex({direction:'column', align: 'start', justfy:'space-between'})}
    ${gap({spaceKey:'sm'})}
    ${padding({spaceKey:'md'})}
    height: 100%;
`; 

export const Stag = styled.div`
    ${flex({direction:'column', align:'start'})}
    ${gap({spaceKey:'sm'})}

    h2 {
        ${flex({ justfy:'start'})}
        ${font({fontKey:'secondary', sizeKey:'sm'})}
        color: ${({ theme }) => theme.colors.title.reverse};
        font-weight: 600;
        letter-spacing: 1px;
    }
`;

export const SContainerItens = styled.div`
    ${flex({})}
    ${gap({spaceKey:'md'})}
    width: 100%;

    span {
        ${flex({})}
        padding: 5px 15px;
        ${gap({spaceKey: 'sm'})}
        ${font({fontKey:'secondary', sizeKey:'sm'})}
        ${borderRadius({radiusKey:'sm'})}
        height: fit-content;
        background-color:  ${({ theme }) => theme.colors.background.high};
        font-weight: 600;
        font-style: italic;
    }
`;