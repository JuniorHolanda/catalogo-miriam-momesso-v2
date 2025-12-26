'use client';
import { blurBg, flex } from '@/styles/mixins';
import styled from 'styled-components';

export const Swrapper = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  ${flex({})}
  width: 100%;
  padding: ${({ theme }) => theme.spaces.medium};
  ${blurBg}
`;

export const Snav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  gap: ${({ theme }) => theme.spaces.medium};
  padding: ${({ theme }) => theme.spaces.medium};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadios.large};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.textAccent};
  z-index: 2;
`;
