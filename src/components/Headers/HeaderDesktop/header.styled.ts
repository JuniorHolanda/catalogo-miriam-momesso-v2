'use client';

import { boxShadow, flex, smoothTransition } from '@/styles/mixins';
import styled from 'styled-components';

export const Scontainer = styled.header`
  ${flex({ align: 'center', justfy:'space-between'})}
  ${boxShadow}
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spaces.medium};
  gap: ${({ theme }) => theme.spaces.small};
  z-index: 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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
  ${flex({})}
  gap: ${({ theme }) => theme.spaces.large};
  flex: 1;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.commonFont};
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.textAccent};

  li {
    ${flex({})}
    ${smoothTransition}
    padding: ${({ theme }) => theme.spaces.small};
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
`;
