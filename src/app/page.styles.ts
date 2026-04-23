'use client';

import { flex, gap, padding } from "@/styles/mixins";
import styled from "styled-components";

export const Scontainer = styled.div`
  position: relative;
  z-index: 0;
  ${flex({ align: 'center', justfy: 'start' })};
  ${gap({ spaceKey: 'md' })};
  ${padding({spaceKey:'md'})}
  width: 100%;
  margin-top: 10dvh;
  height: 80dvh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.high};
  
  
  @media (min-width: 550px) {
    height: 90vh;
    margin-top: 0;
  }
;
`;

export const Ssection = styled.main`
  position: relative;
  z-index: 0;
  ${flex({ align: 'center', justfy: 'start' })};
  padding: 0 ${({ theme }) => theme.spaces.md};
  ${gap({ spaceKey: 'md' })};
  width: 100%;
  height: 100%;
  overflow: hidden;
  `;

export const SDesktop = styled.div`
display: block;
width: 100%;
height: 100%;

@media (max-width: 550px) {
  display: none;
}
`;

export const SMobile = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  
  

  @media (max-width: 550px) {
    ${flex({direction:'column'})}
    ${gap({spaceKey:'md'})}
  }
`;
