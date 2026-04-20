'use client'

import { borderRadius, flex, gap, padding } from "@/styles/mixins";
import styled from "styled-components";

export const SForm = styled.form`
    ${flex({direction:'column'})}
    ${gap({spaceKey:"md"})}
    width: 100%;
    height: fit-content;
    border: solid rgb(0, 128, 255);
    
    input {
        ${borderRadius({radiusKey:'md'})};
        ${padding({spaceKey:"md"})};
        background-color: ${({ theme }) => theme.colors.background.base};
        width: 100%;
        height: 5vh;
    }
`;