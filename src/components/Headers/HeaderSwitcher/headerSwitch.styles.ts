'use client'

import { flex } from '@/styles/mixins';
import styled from 'styled-components';

export const SDesktop = styled.div`
  display: block;
  
  @media (max-width: 400px) {
    display: none;
  }
  `;

export const SMobile = styled.div`
  display: none;
  width: 100%;
  height: fit-content;
  
  @media (max-width: 400px) {
    display: flex;
  }
`;