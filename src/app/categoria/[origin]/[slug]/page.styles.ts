'use client'

import { entraceToBottom } from '@/styles/animations'
import { flex, font, gap, padding } from '@/styles/mixins'
import styled, { keyframes } from 'styled-components'

export const SWrapper = styled.main`
  ${flex({ direction: 'column', justfy: 'start', align: 'center' })};
  ${padding({ spaceKey: 'md' })};
  ${gap({ spaceKey: 'md' })};
  background-color: ${({ theme }) => theme.colors.background.base};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.base};
  height: 100%;
  overflow-y: scroll;

  @media (min-width: 550px) {
    ${padding({ spaceKey: 'xlg' })};
    ${gap({ spaceKey: 'xlg' })};
    height: 100%;
  }
`

export const SContainerTitle = styled.div`
  ${flex({ direction: 'column' })};
  color: ${({ theme }) => theme.colors.title.primary};
  opacity: 0;
  animation: ${entraceToBottom} ease-in-out 0.5s forwards;

  h1 {
    font-weight: 100;
    text-transform: capitalize;
    ${font({ fontKey: 'primary', sizeKey: 'lg' })};
    
    @media (min-width: 550px) {
      ${font({ fontKey: 'primary', sizeKey: 'xlg' })};
    }
  }

  p {
    ${font({ fontKey: 'secondary', sizeKey: 'md' })};
    font-weight: 100;
  }
`
