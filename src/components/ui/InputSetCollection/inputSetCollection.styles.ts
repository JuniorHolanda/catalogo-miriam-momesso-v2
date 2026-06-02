'use client'

import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import styled from 'styled-components'
import CustomButton from '../Button'

export const SForm = styled.form`
  ${flex({ direction: 'row' })}
  ${gap({ spaceKey: 'md' })}
  width: 100%;
  height: 8vh;
  ${borderRadius({ radiusKey: 'md' })};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.opacity.base};
  &:focus-within {
    outline: 2px solid #4f46e5;
  }

  input {
    ${padding({ spaceKey: 'md' })};
    ${font({ fontKey: 'secondary', sizeKey: 'md' })}
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
  }
`

export const SButtonCategory = styled(CustomButton)`
  height: 100%;
  width: fit-content;
  border-radius: 15px 0 0 15px;
  background-color:  ${({ disabled, theme }) => (disabled ? theme.colors.button.inactive : theme.colors.feedback.success)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity:  ${({ disabled }) => (disabled ? .3 : 1)};


  &:hover {
      background-color:  ${({ disabled, theme }) => (disabled ? theme.colors.button.inactive : theme.colors.feedback.success)};
  }
`
