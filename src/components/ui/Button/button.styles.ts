'use client';
import { borderRadius, flex, font, padding } from '@/styles/mixins';
import styled from 'styled-components';

export const SButton = styled.button`
  ${flex({})}
  ${font({fontKey:'secondary', sizeKey:'xsm'})}
  ${padding({ spaceKey: 'md' })}
  ${borderRadius({ radiusKey: 'md' })}
  background-color: ${({ theme }) => theme.colors.button.default};
  color: ${({ theme }) => theme.colors.link.primary};
  width: 100%;
  transition: all ease-in-out .2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  &:active {
    transform: scale(0.98);
    background-color: ${({ theme }) => theme.colors.button.active};
  }
`;
