'use client'

import { flex } from '@/styles/mixins';
import styled from 'styled-components';

export const SDesktop = styled.div`
  display: block;
  
  @media (max-width: 550px) {
    display: none;
  }
  `;

export const SMobile = styled.div`
  display: none;
  width: 100%;
  height: 100%;


  @media (max-width: 550px) {
    ${(flex({direction:'column'}))}
  }
`;