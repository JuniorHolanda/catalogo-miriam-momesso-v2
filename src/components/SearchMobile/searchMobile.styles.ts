'use client'

import { borderRadius, flex, padding } from "@/styles/mixins";
import styled from "styled-components"

export const  SWrapper = styled.form`
    ${flex({})};
    width: 100%;
    height: 10%;
    
    input {
        background-color: ${({ theme }) => theme.colors.background.high};
        ${borderRadius({radiusKey:"md"})}
        ${flex({})};
        ${padding({spaceKey:'md'})}
        width: 100%;

    }
`;