'use client'

import { flex, gap } from "@/styles/mixins";
import styled from "styled-components";

export const SWrapper = styled.div`
    grid-area: smainImg;
    ${flex({direction:'column'})};
    ${gap({spaceKey:'md'})}
    width: 100%;
`;

export const SGallery = styled.div`
    ${flex({})};
    ${gap({spaceKey: 'md'})};
    grid-area: sgallery ;
    width: 100%;
    height: 100%;

    div{
        display: flex;
        height: 100%;
        width: 100%;
        border-radius: 300px;
        overflow: hidden;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 30px;
        }
    }
`;

export const SMainImg = styled.div`
    grid-area: smainImg;
    width: 100%;
    height: 100%;  
    

    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        border-radius: 30px;
    }
`;