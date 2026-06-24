'use client'

import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import styled from 'styled-components'
import CustomButton from '../Button'

export const SWrapper = styled(CustomButton)`
  ${flex({})};
  ${padding({ spaceKey: 'md' })};
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.button.default};
  color: ${({ theme }) => theme.colors.text.reverseText};


  .icon {
    font-size: ${({ theme }) => theme.iconSize.sm};
  }

  @media (min-width: 550px) {
    height: 100%;
    width: fit-content;
    ${padding({ spaceKey: 'md' })}
    ${gap({ spaceKey: 'md' })}
  }

  span {
    display: none;

    @media (min-width: 700px) {
      display: block;
    }
  }
`
