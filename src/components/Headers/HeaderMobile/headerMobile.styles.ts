'use client'
import { flexCenter } from "@/styles/mixins";
import styled from "styled-components";

export const Swrapper = styled.section`
    position: fixed;
    bottom: 0;
    left: 0;
    ${flexCenter}
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Snav = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spaces.medium};
    padding: ${({ theme }) => theme.spaces.medium};
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.large};
`;