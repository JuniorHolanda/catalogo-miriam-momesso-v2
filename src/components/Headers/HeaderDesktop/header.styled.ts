'use client'

import { flex, gap, padding } from '@/styles/mixins'
import Link from 'next/link'
import styled from 'styled-components'

export const Scontainer = styled.header`
  position: relative;
  ${flex({ align: 'center', justfy: 'space-between' })}
  ${gap({ spaceKey: 'sm' })}
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.pallet.primary};
  z-index: 1;
  z-index: 999; //solução rápida para corrigir problema
  border-bottom: ${({ theme }) => (theme.mode === 'light' ? '' : '1px solid #ff993357')};
    padding:
    0 //↑
    ${({ theme }) => theme.spaces.xlg} // →
    0 // ↓
    ${({ theme }) => theme.spaces.xlg} // ←
`
export const ScontainerLogo = styled(Link)`
  ${flex({ align: 'center', justfy: 'start' })}
  ${padding({ spaceKey: 'sm' })}
  flex: 0.5;
  height: 100%;

  img {
    object-fit: contain;
    height: 80%;
    width: auto;
  }
`
