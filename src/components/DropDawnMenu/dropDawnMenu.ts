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
    background-color: ${({theme}) => theme.colors.opacity.base};
    backdrop-filter: blur(30px);
`;

export const SNav = styled.nav`
    ${gap({spaceKey: 'md'})};
    ${flex({direction: "column"})}
    color: ${({ theme }) => theme.colors.text};
    
    h2 {
        ${padding({spaceKey: 'md'})};
        width: 100%;
        text-align: start;
        border-bottom: 2px solid;
        color: ${({ theme }) => theme.colors.text};
    }
    
    ul {
        ${flex({direction: "column", align: 'start'})}
        width: 100%;
        
        li{
            ${flex({direction: "column", align: 'start'})}
            border: solid #951;
            width: 100%;
            height: 100%;
            transition: all.3s;
            &:hover {
                transform: translateX(10px);
            }
        }
    }
    `;

export const SLink = styled(Link)`
    ${flex({align: 'center', justfy: 'start'})}
    ${gap({spaceKey:'sm'})}
    height: 100%;
    width: 100%;
    border: solid #3300ff;
    
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