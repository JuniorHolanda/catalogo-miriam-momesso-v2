'use client';
import { borderRadius, padding } from '@/styles/mixins';
import styled from 'styled-components';

export const SButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button.default};
  color: ${({ theme }) => theme.colors.text.text};
  ${padding({spaceKey: 'md'})}
  ${(borderRadius({radiusKey:'md'}))}
  width: fit-content;
`;
