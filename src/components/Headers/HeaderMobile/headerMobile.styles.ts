'use client';
import { borderRadius, flex, gap, padding } from '@/styles/mixins';
import styled from 'styled-components';

export const Swrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  ${flex({})}
  width: 100%;
  ${padding({spaceKey: 'md'})}
`;

export const Snav = styled.nav`
  display: flex;
  justify-content: space-between;
  ${gap({spaceKey: 'md'})} 
  ${padding({spaceKey: 'md'})}
  width: 100%;
  ${(borderRadius({radiusKey:'md'}))}
  z-index: 2;
`;
