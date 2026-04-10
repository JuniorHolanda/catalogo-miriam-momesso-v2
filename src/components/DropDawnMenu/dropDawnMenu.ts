'use client'
import { borderRadius, flex, gap, padding, } from "@/styles/mixins";
import Link from "next/link";
import styled from "styled-components";

export const SWrapper = styled.section`
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateX(-50%);
    ${flex({align: 'start'})}
    ${gap({spaceKey: 'md'})};
    ${padding({spaceKey: 'xlg'})};
    ${borderRadius({radiusKey:'lg'})}
    max-height: 90dvh;
    background-color: ${({theme}) => theme.colors.opacity.base};
    backdrop-filter: blur(30px);
    `;

export const SNav = styled.nav`
    ${gap({spaceKey: 'sm'})};
    ${flex({direction: "column", align: "start", justfy:'start'})}
    color: ${({ theme }) => theme.colors.text};
    height: 100%;
    
    h2 {
        ${padding({spaceKey: 'md'})};
        width: 100%;
        height: auto;
        text-align: start;
        border-bottom: 2px solid;
        color: ${({ theme }) => theme.colors.text};
    }
    
    ul {
        ${flex({direction: "column", align: 'start', justfy:'start'})}
        ${gap({spaceKey:'sm'})}
        width: 100%;
        height: auto;
        
        li{
            ${flex({direction: "column", align: 'start'})}
            width: 100%;
            height: 100%;
            transition: all.2s;
            &:hover {
                transform: translateX(5px);
            }
        }
    }
    `;

export const SLink = styled(Link)`
    ${flex({align: 'center', justfy: 'start'})}
    ${gap({spaceKey:'sm'})}
    height: 100%;
    width: 100%;
    
    div {
        width: 40px;
        height: 40px;
        border-radius: 300px;
        overflow: hidden;

        img {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }

        span {
            width: 100%;
        }
    }
`;