'use client';
import { borderRadius, flex, font, padding } from '@/styles/mixins';
import styled from 'styled-components';

export const SButton = styled.button`
  ${flex({})}
  ${font({fontKey:'secondary', sizeKey:'xsm'})}
  ${padding({ spaceKey: 'md' })}
  ${borderRadius({ radiusKey: 'md' })}
  background-color: ${({ theme }) => theme.colors.button.default};
  color: ${({ theme }) => theme.colors.text.reverseText};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  &:active {
    transform: scale(0.98);
    background-color: ${({ theme }) => theme.colors.button.active};
  }
`;
