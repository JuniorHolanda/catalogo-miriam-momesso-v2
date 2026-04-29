'use client'

import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import Link from 'next/link'
import styled from 'styled-components'

export const SWrapper = styled.main`
  ${flex({ direction: 'column', justfy: 'start' })}
  ${gap({ spaceKey: 'md' })}
  ${padding({ spaceKey: 'sm' })}
  margin-top: 10dvh;
  height: 80dvh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.background.base};
`
export const SContainerTitle = styled.div`
  ${flex({})}

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
  ${gap({ spaceKey: 'md' })}
  width: 100%;
  height: fit-content;
  `

export const SContent = styled(Link)`
  ${flex({})}
  ${borderRadius({ radiusKey: 'md' })}
    ${padding({ spaceKey: 'sm' })}
    ${gap({ spaceKey: 'md' })}
    width: 100%;
  height: 120px; // verificar porque não ta fazendo efeito
  min-height: 120px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.high};
`

export const SContainerTitleCard = styled.div`
  ${flex({})}
  width: 50%;

  h2 {
    ${font({ fontKey: 'secondary', sizeKey: 'md' })};
    color: ${({ theme }) => theme.colors.text.text};
  }
`

export const SContainerThumb = styled.div`
  overflow: hidden;
  ${flex({})}
  width: 50%;
  height: 100%;
  position: relative;
  ${borderRadius({ radiusKey: 'md' })}

  // não usar estilo normal aqui, apenas estilos que venham de váriaveis
    .thumb {
    ${borderRadius({ radiusKey: 'md' })}
  }
`
