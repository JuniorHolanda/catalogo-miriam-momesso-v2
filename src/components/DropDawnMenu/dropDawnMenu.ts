'use client'
import { flex, } from "@/styles/mixins";
import styled from "styled-components";

export const SWrapper = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    ${flex({align: 'start'})}
    ${gap({spaceKey: 'md'})}${({theme}) => theme.spaces.xLarge};
    padding:${({theme}) => theme.spaces.xLarge};
    border-radius: ${({theme}) => theme.spaces.large};
    background-color: #ffffffb7;
    backdrop-filter: blur(10px);
`;

export const SNav = styled.nav`
    ${gap({spaceKey: 'md'})}${({theme}) => theme.spaces.xLarge};
    ${flex({direction: "column"})}
    color: ${({ theme }) => theme.colors.text};

    h2 {
        padding: 10px;
        width: 100%;
        text-align: start;
        border-bottom: 2px solid;
        color: ${({ theme }) => theme.colors.text};
    }
    
    ul {
        ${flex({direction: "column", align: 'start'})}
        ${flex({direction: "column", align: 'start'})}
        width: 100%;

        li{
            ${flex({align: 'center', justfy: 'start'})}
            width: 100%;
            ${gap({spaceKey: 'md'})}${({theme}) => theme.spaces.xLarge};
            transition: all.3s;
            &:hover {
                transform: translateX(10px);
            }

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
            }
            span{
                ${textLink}
            }
        }
    }
`;