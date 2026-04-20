'use client';

import { entraceToBottomCollection } from "@/styles/animations";
import { borderRadius, flex, font, gap, padding } from "@/styles/mixins";
import styled from "styled-components";



export const SWrapper = styled.button`
${flex({})}
    border: solid #846;
`;



export const SContainerCollection = styled.div`
    ${flex({direction:'column'})}
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.high};
    opacity: 0;
    animation: ${entraceToBottomCollection} ease-in-out .3s forwards;
    border: solid rgb(26, 3, 41);

    h1 {
        display: flex;
        width: 100%;
        height: 100%;
        background-color: rgb(104, 46, 61);
    }
`;

export const SFeedbackCollection = styled.span`
    ${flex({})}
    ${font({fontKey:'secondary', sizeKey:'md'})};
    font-weight: 600;
    ${borderRadius({radiusKey:'md'})}
    ${padding({spaceKey:'md'})}
    background-color: rgb(0, 255, 85);
    width: 70%;
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    word-wrap: nowrap;
`;

export const SContainerNewCollection = styled.div`
    ${flex({direction:'column'})}
    ${padding({spaceKey:"md"})}
    ${gap({spaceKey:"md"})}
    width: 100%;
    color: ${({ theme }) => theme.colors.text.text};
    height: fit-content;
    border: solid #810;
    

    
    p {
        ${flex({})}
        ${font({fontKey:'secondary', sizeKey:"md"})}
        height:33%;
    }
    
    button {
        ${flex({})}
        ${padding({spaceKey:"sm"})}
        width: 100%;
        height:33%;
    }
    
`;

export const SContainerButtonAdd = styled.div`
    ${flex({justfy: 'end'})}
    width: 100%;
    height: 100%;
    border: solid #789;

    .buttonAdd{
        ${font({fontKey:'secondary', sizeKey:'md'})}
        width: 50px;
    }
`;