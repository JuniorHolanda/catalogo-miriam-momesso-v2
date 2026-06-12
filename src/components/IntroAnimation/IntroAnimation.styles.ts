'use client'
import { flex } from "@/styles/mixins";
import styled from "styled-components";

export const SWrapper = styled.div`
position: fixed;
${flex({})}
width: 100vw;
height: 100dvh;
z-index: 1000;
background-color: ${({ theme }) => theme.colors.opacity.base};
backdrop-filter: blur(30px);
`;