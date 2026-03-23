'use client'

import styled from 'styled-components';

export const SDesktop = styled.div`
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SMobile = styled.div`
  display: none;

  @media (max-width: 1400px) {
    display: block;
  }
`;