'use client'
import styled from 'styled-components'
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import Link from 'next/link';

export const Scard = styled.article`
  display: none;
  ${borderRadius({ radiusKey: 'md' })}
  width: 100%;
  height: 100%;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.colors.opacity.base};

  @media (min-width: 550px) {
    ${flex({ direction: 'column' })}
    width: 150px;
    height: 100%;
  }
`

export const SContainerThumb = styled.div`
  ${flex({})}
  width: 100%;
`;

export const SLink = styled(Link)`
  ${flex({align:'center', justfy:'center'})}
  ${padding({ spaceKey: 'sm' })}
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  
  h1 {
    width: 100%;
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
    color: ${({ theme }) => theme.colors.text.reverseText};
  }
`
