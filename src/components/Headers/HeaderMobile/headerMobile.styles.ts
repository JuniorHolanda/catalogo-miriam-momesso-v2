'use client';
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

export const Swrapper = styled.section`
  ${flex({})}
  width: 100%;
  height: 10vh;
  ${padding({spaceKey: 'md'})}
  background-color: ${({ theme }) => theme.colors.background.high};
  `;

export const Snav = styled.nav`
  ${flex({justfy:'space-between'})}
  ${gap({spaceKey: 'md'})} 
  ${padding({spaceKey: 'md'})}
  ${(borderRadius({radiusKey:'md'}))}
  width: 100%;
  height: 100%;
  z-index: 2;
  `;

export const SLink = styled(Link)`
  ${flex({})}
  font-size: clamp(1rem, 6rem, 8vw);
  color: ${({ theme }) => theme.colors.link.primary};
`;

export const SContainerBtnShowMenu = styled.div`
  ${flex({})}
  font-size: ${({ theme }) => theme.iconSize.md};
  color: ${({ theme }) => theme.colors.link.primary};
`;

