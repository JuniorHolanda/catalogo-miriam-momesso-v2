'use client';

import { flex, padding } from "@/styles/mixins";
import styled from "styled-components";



export const SWrapper = styled.button`
    ${flex({})}
    ${padding({spaceKey:'sm'})}
    width: 40px;
    height: 40px;
    span {
        display: none;

        @media (min-width: 550px) {
            display: block;
        }
    }
    
`;