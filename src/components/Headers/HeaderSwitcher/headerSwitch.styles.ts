'use client'

import { flex } from '@/styles/mixins';
import styled from 'styled-components';

export const SDesktop = styled.div`
  display: none;
  
  @media (min-width: 550px) {
    ${flex({direction:'column'})}
    height: 100vh
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