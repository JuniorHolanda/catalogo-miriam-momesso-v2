'use client'
import styled from 'styled-components'
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import Link from 'next/link'

export const SWrapper = styled(Link)`
  ${flex({})}
  ${borderRadius({ radiusKey: 'md' })}
  width: 100%;
  height: 100px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.opacity.base};
  cursor: pointer;

  @media (min-width: 550px) {
    ${flex({ direction: 'column' })}
    width: 150px;
    height: 100%;
  }
`

export const SContainerThumb = styled.div`
  ${flex({})}
  height: 100%;
  width: auto;
`

export const STitle = styled.span`
  ${flex({ align: 'center', justfy: 'center' })}
  ${padding({ spaceKey: 'sm' })}
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  h1 {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    width: 100%;
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
    color: ${({ theme }) => theme.colors.text.reverseText};
  }
`