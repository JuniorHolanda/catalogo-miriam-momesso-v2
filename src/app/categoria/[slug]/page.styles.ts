'use client';

import { flex, font, gap, padding } from "@/styles/mixins";
import Link from "next/link";
import styled from "styled-components";

export const SWrapper = styled.main`
    position: relative;
    ${flex({direction:'column', justfy:'start'})}
    ${padding({spaceKey:'xlg'})}
    ${gap({spaceKey:'xlg'})}
    background-color: ${({ theme }) => theme.colors.background.base};
    width: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.background.high};
`;

export const SContainerTitle = styled.div`
    ${flex({direction:'column'})}
    color: ${({ theme }) => theme.colors.title.primary};

    h1 {
        ${font({fontKey:'primary', sizeKey:'xlg'})}
        font-weight: 100;
    }
    
    p{
        ${font({fontKey:'secondary', sizeKey:'md'})}
        font-weight: 100;
    }
`;

export const SSection = styled.section`
    display: grid;
    grid-template: 400px / 1fr 1fr 1fr 1fr;
    ${gap({spaceKey:'md'})}
    width: 100%;

`;

export const SContainerProduct = styled.div`
    ${flex({})}
`;