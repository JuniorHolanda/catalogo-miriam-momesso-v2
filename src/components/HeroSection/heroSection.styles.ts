'use client';

import styled from 'styled-components';
import { flex, gap, padding } from '@/styles/mixins';

export const Ssection = styled.section`
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
  padding: ${({ theme }) => theme.spaces.md} 0;

  

  @media (max-width: 550px) {
    ${flex({direction:'column'})}
    ${gap({spaceKey:'md'})}
  }
`;
