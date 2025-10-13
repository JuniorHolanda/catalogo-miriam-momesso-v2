'use client';
import styled from 'styled-components';

export const SButton = styled.button`
  background-color: ${({ theme }) => theme.colors.btn};
  color: ${({ theme }) => theme.colors.textAccent};
  padding: ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.medium};
  border-radius: ${({ theme }) => theme.borderRadios.small};
  width: fit-content;
`;
