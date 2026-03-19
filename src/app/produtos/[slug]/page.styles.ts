'use client';

import { borderRadius, flex, font, gap, padding } from "@/styles/mixins";
import styled from "styled-components";

type viewPortProps = {
  $viewPortStyle: 'sm' | 'md' | 'lg' | 'xl' | null;
};

export const SWrapper = styled.main`
    position: relative;
    ${flex({})}
    width: 100%;
    height:90vh;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background.base};
`;

export const SSection = styled.section<viewPortProps>`
    display: grid;
    z-index: 0;

    grid-template-columns: ${({ $viewPortStyle }) =>
        $viewPortStyle === "xl" || $viewPortStyle === "lg"
            ? "1fr 1fr 2fr"
            : $viewPortStyle === "md"
            ? ""
            : ""
    };

    grid-template-rows: ${({ $viewPortStyle }) =>
        $viewPortStyle === "xl" || $viewPortStyle === "lg"
            ? "2fr 1fr 1fr 1fr"
            : $viewPortStyle === "md"
            ? ""
            : "" 
    };

    grid-template-areas: ${({ $viewPortStyle }) =>
    
    $viewPortStyle === "xl" || $viewPortStyle === "lg"
        ? `
            "sgallery sgallery smainImg"
            "sgallery sgallery smainImg"
            "scontent scontent smainImg"
            "scontent scontent sinfo"
        `
        : $viewPortStyle === "md"
        ? `

        `
        : `
            "smainImg"
            "sgallery"
            "scontent"
            ""
        `
    };

    width: ${({ $viewPortStyle }) =>
        $viewPortStyle === "xl" || $viewPortStyle === "lg" ?
            "70%"
        : $viewPortStyle === "md" ? "90%": "100"           
    };

    height: 100%;
    justify-self: center;
    ${gap({spaceKey: 'lg'})}
    ${padding({spaceKey:'lg'})}
`;

export const SGallery = styled.div`
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-area: sgallery ;
    ${gap({spaceKey: 'md'})}
    width: 100%;
    height: 100%;

    div{
        display: flex;
        height: 100%;
        width: 100%;
        overflow: hidden;

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
    grid-area: smainImg;
    width: 100%;
    height: 100%;  

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
    grid-area: scontent ;
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
    grid-area: sinfo;
    ${flex({ direction: "column", align: 'start'})};
    ${borderRadius({radiusKey:'md'})}
    ${gap({spaceKey:'sm'})}
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
    ${flex({align: 'center', justfy:'space-between'})}
    ${gap({spaceKey:'md'})}
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