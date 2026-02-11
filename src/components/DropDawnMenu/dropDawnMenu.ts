'use client'
import { flex, textLink } from "@/styles/mixins";
import styled from "styled-components";

export const SWrapper = styled.section`
    position: absolute;
    top: 50%;
    ${flex({align: 'start'})}
    gap:${({theme}) => theme.spaces.xLarge};
    padding:${({theme}) => theme.spaces.xLarge};
    border-radius: ${({theme}) => theme.spaces.large};
    background-color: #ffffffb7;
    backdrop-filter: blur(10px);
`;

export const SNav = styled.nav`
    gap:${({theme}) => theme.spaces.xLarge};
    ${flex({direction: "column"})}
    color: ${({ theme }) => theme.colors.text};
    
    ul {
        ${flex({direction: "column", align: 'start'})}
        width: 100%;
        ${flex({direction: "column", align: 'start'})}
        li{
            ${flex({align: 'center', justfy: 'start'})}
            width: 100%;
            gap:${({theme}) => theme.spaces.xLarge};

            img {
                width: 40px;
                border-radius: 300px;
            }
            span{
                ${textLink}
            }
        }
    }
`;