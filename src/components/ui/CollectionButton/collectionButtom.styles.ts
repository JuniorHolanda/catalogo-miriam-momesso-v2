'use client';

import { entraceToBottomCollection } from "@/styles/animations";
import { borderRadius, flex, font, gap, padding } from "@/styles/mixins";
import styled from "styled-components";



export const SWrapper = styled.button`
    
`;



export const SContainerCollection = styled.div`
    ${flex({})}
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.background.high};
    opacity: 0;
    animation: ${entraceToBottomCollection} ease-in-out .3s forwards;
`;

export const SContainerNewCollection = styled.div`
    ${flex({direction:'column'})}
    ${padding({spaceKey:"md"})}
    ${gap({spaceKey:"md"})}
    width: 100%;
    color: ${({ theme }) => theme.colors.text.text};
    height: fit-content;
    

    
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

export const SForm = styled.form`
    ${flex({direction:'column'})}
    ${gap({spaceKey:"md"})}
    width: 100%;
    
    input {
        ${borderRadius({radiusKey:'md'})};
        ${padding({spaceKey:"md"})};
        background-color: ${({ theme }) => theme.colors.background.base};
        width: 100%;
        height: 5vh;
    }
    `;
