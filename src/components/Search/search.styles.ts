'use client';

import { flexCenter } from "@/styles/mixins";
import Link from "next/link";
import styled from "styled-components";

export const Sform = styled.form`
    ${flexCenter};
    position: relative;
    flex-direction: column;
    flex: .5;
    height: 100%;
`

export const ScontainerInput = styled.div`
    ${flexCenter};
    width: 100%;
    height: 100%;

    label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    input {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: ${({ theme }) => theme.borderRadios.large};
        overflow: hidden;
        width: 100%;
        height: 100%;

        &::placeholder {
            padding: ${({ theme }) => theme.spaces.small};
            color: ${({ theme }) => theme.colors.textMuted};
            font-family: ${({ theme }) => theme.fonts.commonFont};
            font-size: ${({ theme}) => theme.fontSize.small};
        }
    }
`

export const Sul = styled.ul`
    ${flexCenter}
    flex-direction: column;
    top: 110%;
    left: 0;
    position: absolute;
    max-height: 600px;
    background-color: ${({ theme }) => `${theme.colors.backgroundAccent}80`};
    backdrop-filter: blur(10px);
    li {
        ${flexCenter} 
    }
`

export const Slink = styled(Link)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    div {
        ${flexCenter}
        flex: 1;
    }

    h3 {
        flex: 1;
    }

    p {
        flex: 1;
    }
`