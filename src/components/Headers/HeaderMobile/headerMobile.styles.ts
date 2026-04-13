'use client';
import { borderRadius, flex, gap, padding } from '@/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

export const Swrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  ${flex({})}
  width: 100%;
  height: 10vh;
  ${padding({spaceKey: 'md'})}
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background.high};
  `;

export const Snav = styled.nav`
  ${flex({justfy:'space-between'})}
  ${gap({spaceKey: 'md'})} 
  ${padding({spaceKey: 'md'})}
  ${(borderRadius({radiusKey:'md'}))}
  width: 100%;
  z-index: 2;
  `;

export const SLink = styled(Link)`
  ${flex({})}
  font-size: clamp(1rem, 6rem, 8vw);
  color: ${({ theme }) => theme.colors.link.primary};
`;
