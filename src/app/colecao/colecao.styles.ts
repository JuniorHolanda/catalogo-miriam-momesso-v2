'use client'

import CustomButton from '@/components/ui/Button'
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'

export const SWrapper = styled.main`
  ${flex({ direction: 'column', justfy: 'start' })}
  ${gap({ spaceKey: 'md' })}
  ${padding({ spaceKey: 'sm' })}
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.background.base};

  @media (min-width: 550px) {
    ${flex({ direction: 'column', justfy: 'center' })};
  }
`
export const SContainerTitle = styled.div`
  ${flex({})};

  h1 {
    ${font({ fontKey: 'primary', sizeKey: 'lg' })}
    text-align: center;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.title.primary};
  }
`

export const SContainerCards = styled.div`
  ${flex({ direction: 'column', justfy: 'start', align: 'center' })}
  ${padding({ spaceKey: 'sm' })}
  ${gap({ spaceKey: 'sm' })}
  width: 100%;
  height: fit-content;
  
  @media (min-width: 550px) {
    ${gap({ spaceKey: 'md' })}
    ${flex({ direction: 'row', justfy: 'center' })}
    flex-wrap: wrap;
    height: 100%;
  }
`

export const SContent = styled(motion.div)`
  ${flex({})}
  ${borderRadius({ radiusKey: 'md' })}
  ${padding({ spaceKey: 'md' })}
  ${gap({ spaceKey: 'md' })}
  width: 100%;
  height: 120px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.high};

  @media (min-width: 550px) {
    position: relative;
    flex-direction: column;
    ${gap({ spaceKey: 'sm' })};
    padding: 0;
    height: fit-content;
    width: fit-content;
  }
  `

export const SLink = styled(Link)`
  ${flex({})}
  width: 50%;
  
  @media (min-width: 550px) {
    ${padding({ spaceKey: 'md' })};
    width: 100%;
    white-space: nowrap;
    background-color: ${({ theme }) => theme.colors.background.surface};
  }

  h2 {
    ${font({ fontKey: 'secondary', sizeKey: 'md' })};
    color: ${({ theme }) => theme.colors.text.text};
  }
`

export const SContainerThumb = styled(Link)`
  grid-area: thumb;
  overflow: hidden;
  ${flex({})}
  width: 50%;
  height: 100%;
  position: relative;
  ${borderRadius({ radiusKey: 'md' })};

  // não usar estilo normal aqui, apenas estilos que venham de váriaveis
  .thumb {
    ${borderRadius({ radiusKey: 'md' })}
  }
  @media (min-width: 550px) {
    width: 100%;
  }
`

export const SContainerIcons = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  ${flex({ direction: 'column', justfy: 'start' })};
  ${padding({ spaceKey: 'sm' })};
  ${gap({ spaceKey: 'sm' })}
  ${font({ fontKey: 'secondary' })};
  width: fit-content;
  height: 100%;

  & > :nth-child(1) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.feedback.error};
    }
  }
`

export const SBtnOptionsCard = styled(CustomButton)`
  background-color: ${({ theme }) => theme.colors.opacity.base};
  color: ${({ theme }) => theme.colors.link.primary};
  transition: all ease-in-out 0.2s;
  backdrop-filter: blur(4px);

  &:hover {
    color: ${({ theme }) => theme.colors.link.reverse};
  }
`
