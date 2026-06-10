'use client'

import { flex } from '@/styles/mixins'
import styled from 'styled-components'

export const SDesktop = styled.div`
  display: none;

  @media (min-width: 550px) {
    ${flex({ direction: 'column' })};
    height: 100vh;
    overflow: hidden;
    width: 100vw;
  }
`

export const SMobile = styled.div`
  ${flex({ direction: 'column' })};
  overflow-y: scroll;
  width: 100%;
  height: 100dvh;

  @media (min-width: 550px) {
    display: none;
  }
`

export const SContainerContent = styled.div`
  ${flex({ direction: 'column', justfy: 'start' })}
  height: 100%;
  overflow-y: scroll;
  width: 100%;
`
