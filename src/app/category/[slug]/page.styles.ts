'use client';

import { borderRadius, flex, font, gap, padding } from "@/styles/mixins";
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

export const SBanner = styled.div`
    ${flex({})};
    
    width: 100%;
    height: 500px;
    
    img {
        ${borderRadius({radiusKey:'lg'})};
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    
    .swiper-itens{
        overflow: hidden;
        height: 500px;
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