'use client';

import { flexCenter, smoothTransition } from '@/styles/mixins';
import styled from 'styled-components';

export const SHeader = styled.header`
  ${flexCenter}
  width: 100%;
  height: 15vh;
  background-color: ${({ theme }) => theme.colors.backgroundAccent};
  padding: ${({ theme }) => theme.spaces.large};
`;

export const Scontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spaces.small};
  gap: ${({ theme }) => theme.spaces.small};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadios.Xlarge};
`;
export const ScontainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex: 0.5;
  height: 100%;

  img {
    object-fit: contain;
    height: 100%;
    width: auto;
  }
`;
export const Snav = styled.div`
  ${flexCenter}
  gap: ${({ theme }) => theme.spaces.large};
  flex: 1;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.commonFont};
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textAccent};

  li {
    ${flexCenter}
    ${smoothTransition}
        padding: ${({ theme }) => theme.spaces.small};
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
`;
