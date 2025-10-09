'use client';

import { flexCenter } from "@/styles/mixins";
import styled from "styled-components";

export const SHeader = styled.header`
    ${flexCenter}
    width: 100%;
    height: 15vh;
    background-color: ${({ theme }) => theme.colors.backgroundAccent};
    padding: ${({ theme }) => theme.spaces.small};
`

export const Scontainer = styled.div`
    ${flexCenter}
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadios.Xlarge};
`
export const ScontainerLogo = styled.div`
    ${flexCenter}
    width: 100%;
    height: 100%;
`
export const Snav = styled.div`
    ${flexCenter}
    width: auto;
    height: 100%;
`