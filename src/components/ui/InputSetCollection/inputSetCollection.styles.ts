'use client'

import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import styled from 'styled-components'
import CustomButton from '../Button'
import { motion } from 'framer-motion'

export const SForm = styled(motion.form)`
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
    ${padding({ spaceKey: 'lg' })};
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    background-color: transparent;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.text.text};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.text};
    }
  }
`

export const SButtonCategory = styled(CustomButton)`
  height: 100%;
  width: fit-content;
  border-radius: 15px 0 0 15px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.button.inactive : theme.colors.feedback.success};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

  & > :nth-child(1) {
    ${flex({})}
    font-size: ${({ theme }) => theme.iconSize.md};

    @media (min-width: 900px) {
      display: none;
    }
  }

  & > :nth-child(2) {
    display: none;
    color: ${({ disabled, theme }) =>
      disabled ? theme.colors.link.primary : theme.colors.link.reverse};

    @media (min-width: 900px) {
      ${flex({})}
    }
  }
`
