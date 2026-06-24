'use client'

import { flex, font } from '@/styles/mixins'
import styled from 'styled-components'

export const SLottie = styled.div`
  ${flex({ direction: 'column' })}
  grid-column: 1 / 9;
  width: 100%;
  height: 100%;

  h2 {
    ${flex({})}
    width: 100%;
    overflow-wrap: anywhere;
    ${font({ fontKey: 'primary', sizeKey: 'lg' })}
    text-align: center;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.title.primary};
    text-align: center;
  }

  p {
    ${font({ fontKey: 'secondary', sizeKey: 'md' })}
    font-weight: 100;
    color: ${({ theme }) => theme.colors.text.text};
    text-align: center;
  }

  .animation{
    width: 100%;
    @media (min-width: 550px) {
      width: 350px;
    }
  }
`
