'use client';

import styled from 'styled-components';
import { flex, padding } from '@/styles/mixins';

export const Ssection = styled.section`
  position: relative;
  z-index: 0;
  ${flex({ align: 'center', justfy: 'start' })}
  ${padding({ spaceKey: 'md' })}
  width: 100%;
  height: 90dvh;
  overflow: hidden;
  `;

export const SDesktop = styled.div`
display: block;
width: 100%;
height: 100%;

@media (max-width: 400px) {
  display: none;
}
`;

export const SMobile = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  @media (max-width: 400px) {
    display: block;
  }
`;
