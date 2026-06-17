'use client'

import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import styled from 'styled-components'

export const SWrapper = styled.button`
  ${flex({})};
  ${padding({ spaceKey: 'sm' })};
  ${borderRadius({ radiusKey: 'sm' })};
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.button.default};
  color: ${({ theme }) => theme.colors.text.reverseText};
  transition: all ease-in-out 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
  
  &:active {
    background-color: ${({ theme }) => theme.colors.button.active};
    transform: scale(0.98);
    background: darkerblue;
  }
  
  @media (min-width: 550px) {
    height: 100%;
    width: fit-content;
    ${padding({ spaceKey: 'md' })}
    ${gap({ spaceKey: 'md' })}
  }

  span {
    display: none;

    @media (min-width: 550px) {
      display: block;
    }
  }
`
