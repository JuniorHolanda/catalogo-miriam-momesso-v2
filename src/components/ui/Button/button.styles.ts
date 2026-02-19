'use client';
import styled from 'styled-components';

export const SButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.textAccent};
  ${padding({spaceKey: 'md'})}
    ${(borderRadius({radiusKey:'md'}))}
  width: fit-content;
`;
