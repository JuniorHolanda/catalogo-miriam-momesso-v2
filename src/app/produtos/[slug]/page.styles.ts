'use client';

import { flex } from "@/styles/mixins";
import styled from "styled-components";

export const SWrapper = styled.main`
    position: relative;
    ${flex({})}
    width: 100%;
    height: 90dvh;
    overflow: hidden;
    background-color: #e9e9e9;
`;

export const SStar = styled.span`
    position: absolute;
    top: -100%;
    left: -40%;
    z-index: 0;
    rotate: 10deg;
`;

export const SSection = styled.section`
    display: grid;
    z-index: 1;
    grid-template: 1fr 1fr 2fr / 1fr auto;
    justify-self: center;
    width: 70%;
    height: 100%;
    gap: 10px;
    padding: 30px;
`;

export const SGallery = styled.div`
    grid-area: 1 / 1 / 2 / 2 ;
    display: flex;
    flex-wrap: wrap;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: ${({ theme }) => theme.spaces.medium};
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
    ${flex({direction: 'column', align: 'start'})};
    grid-area: 2 / 1 / 4 / 2 ;
    backdrop-filter: blur(30px);
    border: solid 2px #c5c5c51f;
    border-radius: 30px;
    overflow: hidden;
    padding: 30px;
    gap: 10px;

    h1 {
        font-family: ${({ theme }) => theme.fonts.titleFont};
        color: white;
        font-weight: 400;
        font-size: 3em;
    }

        p {
        font-family: ${({ theme }) => theme.fonts.commonFont};
        color: white;
        font-weight: 300;
        font-size: 1em;
    }

    div {
        ${flex({})}
        gap: 10px;
        
        button {
            padding: 5px 15px;
            background-color: #ffffff;
            border-radius: 50px;
            color: #000;
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
    gap: 10px;
    padding: 10px;
    border: solid 2px #36363627;
    overflow: hidden;
    border-radius: 30px;
    backdrop-filter: blur(30px);
    width: 100%;
    height: 100%;
    
    div {
        ${flex({})};
        gap: 10px;
        font-family: ${({ theme }) => theme.fonts.commonFont};
        font-size: .7em;     
    }
`;

export const SContainerItens = styled.div`
${flex({})}
width: 100%;

    span {
    ${flex({})}
    padding: 5px 15px;
    gap: 10px;
    height: fit-content;
    border-radius: 30px;
    background-color:  #fff;
    font-family: ${({ theme }) => theme.fonts.commonFont};
    font-weight: 600;
    font-size: 1.5em;
    font-style: italic;
    }
`;