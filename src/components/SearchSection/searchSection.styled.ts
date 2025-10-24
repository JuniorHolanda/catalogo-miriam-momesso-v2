'use client';

import { flexCenter } from "@/styles/mixins";
import styled from "styled-components";

export const Ssection = styled.section`
    position: relative;
    margin-top: calc(10vh + ${({theme}) => theme.spaces.xLarge});
    background-color: ${({ theme }) => theme.colors.backgroundAccent};
    ${flexCenter}
    width: 100%;
    height: calc(85vh - ${({theme}) => theme.spaces.xLarge});
    border-radius: ${({ theme }) => theme.borderRadios.Xlarge};
    overflow: hidden;
`;

export const SbrutalSymbol = styled.span`
        position: absolute;
        top: -50%;
        left: -20%;
        z-index: 20;
        width: clamp(400px, 60em, 50vw);
        
        img {
            width: 100%;
        }
`;