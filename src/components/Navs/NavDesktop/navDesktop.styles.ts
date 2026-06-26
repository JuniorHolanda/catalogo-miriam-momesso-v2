'use  client'

import { flex, font, gap, padding, smoothTransition } from '@/styles/mixins'
import Link from 'next/link'
import styled from 'styled-components'

export const Snav = styled.nav`
  ${flex({})}
  flex: 1;
  height: 100%;
`

export const SList = styled.ul`
  ${flex({})}
  ${gap({ spaceKey: 'md' })} 
  ${font({ sizeKey: 'sm', fontKey: 'secondary' })}
  height: 100%;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.link.reverse};
`

export const SItemMenu = styled.li`
  ${flex({})}
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
  ${padding({ spaceKey: 'sm' })}
  ${smoothTransition}
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.text.reverseText};
  z-index: 1000;
  height: 100%;

  button {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.link.primary : theme.colors.link.primary};
      height: 100%;
    transition: all ease-in-out 0.1s;

    &:hover {
      color: ${({ theme }) => theme.colors.link.hover};
      font-weight: 900;
    }

    &:active {
      color: ${({ theme }) => theme.colors.link.activePrimary};
    }
  }
`

export const SLink = styled(Link)`
  ${flex({})}
  color: ${({ theme }) =>
    theme.mode === 'light' ? theme.colors.link.primary : theme.colors.link.primary};
  transition: all ease-in-out 0.1s;
  height: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.link.hover};
    font-weight: 900;
  }

  &:active {
    color: ${({ theme }) => theme.colors.link.activePrimary};
  }
`
