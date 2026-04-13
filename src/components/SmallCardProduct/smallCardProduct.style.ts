'use client';

import { borderRadius, flex, font, gap, padding } from '@/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

export const SWrapper = styled(Link)`
  display: none;
  ${gap({ spaceKey: 'md' })};
  ${padding({spaceKey:'sm'})};
  ${borderRadius({radiusKey:'md'})};
  background-color: ${({ theme }) => theme.colors.background.high};
  width: 100%;
  height: 120px;
  
  @media (max-width: 600px) {
    ${flex({})}
  }
  `;

export const SContainerImg = styled.div`
  ${flex({})}
  ${borderRadius({radiusKey:'sm'})};
  overflow: hidden;
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
    width: 70%;

    h2 {
      ${font({fontKey:'secondary', sizeKey:'md'})};
    }
    
    p{
      
      ${font({fontKey:'secondary', sizeKey:'sm'})};
    }
`;
