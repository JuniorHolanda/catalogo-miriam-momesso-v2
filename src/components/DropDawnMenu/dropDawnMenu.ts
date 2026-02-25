'use client'
import { borderRadius, flex, gap, padding, } from "@/styles/mixins";
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
            ${gap({spaceKey: 'md'})};
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
                
            }
        }
    }
`;