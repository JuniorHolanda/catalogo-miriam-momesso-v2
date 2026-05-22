'use client'

import { flex } from '@/styles/mixins'
import styled from 'styled-components'

export const SDesktop = styled.div`
  ${flex({direction:'column'})}
  height: 100vh;
  overflow: hidden;

  @media (max-width: 550px) {
    display: none;
  }
`

export const SMobile = styled.div`
  display: none;
  width: 100%;
  height: 100dvh;

  @media (max-width: 550px) {
    ${flex({ direction: 'column' })}
    overflow-y: scroll;
  }
`

export const SContainerContent = styled.div`
  ${flex({ direction: 'column', justfy: 'start' })}
  height: 80dvh;
  overflow-y: scroll;
`
