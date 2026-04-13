'use client';

import { flex, gap } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.div`
  display: none;
  ${gap({ spaceKey: 'md' })};
  width: 100%;
  height: 120px;

  border: solid #456891;

  @media (max-width: 600px) {
    ${flex({})}
  }
`;

export const SContainerImg = styled.div`
  ${flex({})}
  border: solid #789543;
  height: 100%;
  width: 30%;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

export const SContent = styled.div`
    border: solid #782364;
    width: 70%;
`;
