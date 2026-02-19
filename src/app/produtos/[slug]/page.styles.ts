'use client';

import { flex, font, gap } from "@/styles/mixins";
import styled from "styled-components";

export const SWrapper = styled.main`
    position: relative;
    ${flex({})}
    width: 100%;
    height: 90dvh;
    overflow: hidden;
`;

export const SStar = styled.span`
    position: absolute;
    top: -100%;
    left: -40%;
    z-index: 0;
    rotate: 10deg;
    scale: 150%;
`;

export const SSection = styled.section`
    display: grid;
    z-index: 1;
    grid-template: 1fr 1fr 2fr / 1fr auto;
    justify-self: center;
    width: 70%;
    height: 100%;
    ${gap({spaceKey: 'md'})}
    padding: 30px;
`;

export const SGallery = styled.div`
    grid-area: 1 / 1 / 2 / 2 ;
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
    grid-area: 2 / 1 / 4 / 2 ;
    backdrop-filter: blur(30px);
    border: solid 1.5px #ffffff44;
    background-image: linear-gradient(10deg, #ffffff63, #2929293d);
    border-radius: 30px;
    overflow: hidden;
    padding: 30px;
    ${gap({spaceKey: 'md'})}


    h1 {
        ${font({fontKey: 'primary', sizeKey: 'xlg'})}
        color: ${({theme}) => theme.colors.title.secondary};
        font-weight: 500;
    }

    p {
        ${font({fontKey: 'secondary', sizeKey: 'xlg'})}
        ${(flex({}))}
        color: white;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 1em;
        height: 100%;
    }

    div {
        ${flex({align: 'end', justfy: 'end'})}
        ${gap({spaceKey: 'md'})}
        width: 100%;
        height: auto;
        
        button {
            ${flex({})}
            ${font({fontKey: 'secondary', sizeKey: 'sm'})}
            ${gap({spaceKey: 'md'})}
            font-weight: 600;
            padding: 5px 15px;
            background-color: ${({ theme}) => theme.colors.background.high};
            color: ${({ theme}) => theme.colors.link.primary};
            border-radius: 10px;
            transition: all.2s ease-in-out;

            &:hover {
                color: ${({ theme}) => theme.colors.link.activePrimary};
            }
        }
    }
    
    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        border-radius: 30px;
    }
`;

export const SInfo = styled.div`
    grid-area: 3 / 2 / 4 / 3 ;
    ${flex({ direction: "column", align: 'start'})};
    ${gap({spaceKey: 'md'})}
    padding: 10px;
    border: solid 2px #36363627;
    overflow: hidden;
    border-radius: 30px;
    backdrop-filter: blur(30px);
    width: 100%;
    height: 100%;
    
    div {
        ${flex({})};
        ${gap({spaceKey: 'md'})}
        font-size: .7em;
        border: solid #456523;
    }
`;

export const SContainerItens = styled.div`
${flex({})}
width: 100%;

    span {
    ${flex({})}
    padding: 5px 15px;
    ${gap({spaceKey: 'md'})}
    height: fit-content;
    border-radius: 30px;
    background-color:  #fff;
    font-weight: 600;
    font-size: 1.5em;
    font-style: italic;
    }
`;