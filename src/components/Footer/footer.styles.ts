'use client'

import { flex, font, padding } from '@/styles/mixins'
import styled from 'styled-components'

export const SWrapper = styled.footer`
  ${flex({})};
  ${padding({ spaceKey: 'md' })};
  width: 100%;
  height: 5vh;
  background-color: ${({ theme }) => theme.colors.background.surface};

  span {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
    color: ${({ theme }) => theme.colors.text.secondaryText};

    a {
      font-weight: 800;
    }
  }
`
