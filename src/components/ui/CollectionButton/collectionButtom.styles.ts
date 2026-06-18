'use client'

import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import styled from 'styled-components'
import CustomButton from '../Button'
import { motion } from 'framer-motion'
import InputSetCollection from '../InputSetCollection'

type PropsHasProduct = {
  $hasProduct: boolean
}

export const SWrapper = styled.button`
  position: relative;
  ${flex({})};
  ${padding({ spaceKey: 'sm' })};
  ${borderRadius({ radiusKey: 'sm' })};
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.button.default};
  color: ${({ theme }) => theme.colors.text.reverseText};
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.button.active};
    transform: scale(0.98);
    background: darkerblue;
  }

  @media (min-width: 500px) {
    width: fit-content;
    ${padding({ spaceKey: 'md' })};
    ${gap({ spaceKey: 'md' })};
  }

  span {
    display: none;

    @media (min-width: 550px) {
      display: block;
    }
  }
`

export const SWrapperCollection = styled.div`
  ${flex({ direction: 'column', justfy: 'start' })};
  ${padding({ spaceKey: 'md' })};
  ${gap({ spaceKey: 'md' })};
  ${font({ fontKey: 'primary', sizeKey: 'md' })};
  color: ${({ theme }) => theme.colors.text.text};
  left: 0;
  top: 0;
  width: 100%;
  margin-top: 10dvh;
  height: 80dvh;
  background-color: ${({ theme }) => theme.colors.opacity.base};
  backdrop-filter: blur(30px);
  z-index: 998; // corrigir esse valor alto depois
  position: fixed;
  overflow: auto;
  color: ${({ theme }) => theme.colors.title.primary};

  h2 {
    font-weight: 100;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  @media (min-width: 550px) {
    ${flex({ direction: 'column', justfy: 'center' })};
    height: 85vh;
  }
`

export const SContainerCollection = styled.div`
  ${flex({ direction: 'column', justfy: 'start' })};
  ${gap({ spaceKey: 'md' })}
  width: 100%;
  height: auto;
  scrollbar-width: none; //Firefox
  -ms-overflow-style: none; // IE / Edge antigo

  @media (min-width: 550px) {
    ${flex({ direction: 'row', align: 'center' })};
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    justify-content: center;
    height: fit-content;
    width: 100%;
  }
`

export const SContainerBtn = styled.div`
  ${flex({ direction: 'column', justfy: 'center' })};
  ${gap({ spaceKey: 'sm' })};
  width: 100%;
  height: auto;
  

  @media (min-width: 550px) {
    width: 70%;
  }
`

export const STitleNewCollection = styled(motion.div)`
  ${flex({ direction: 'column', justfy: 'center' })};
  ${gap({ spaceKey: 'sm' })};
  width: 100%;


  h3 {
        ${font({ fontKey: 'primary', sizeKey: 'lg' })};

  }
  
  h2{
    ${font({ fontKey: 'primary', sizeKey: 'md' })};
  }
  p {
    ${font({ fontKey: 'secondary', sizeKey: 'xsm' })};
    color: ${({ theme }) => theme.colors.text.text};
  }
  @media (min-width: 550px) {
    ${gap({ spaceKey: 'md' })};
    h2,
    h3 {
      ${font({ fontKey: 'primary', sizeKey: 'lg' })};
    }
    p {
      ${font({ fontKey: 'secondary', sizeKey: 'lg' })};
      color: ${({ theme }) => theme.colors.text.text};
    }
  }
`

export const SInputSetCollection = styled(InputSetCollection)`
  width: 100%;

  
  @media (min-width: 550px) {
    width: 80%;
  }

    @media (min-width: 1000px) {
    width: 50%;
  }
`

export const SCollection = styled(motion.div)<PropsHasProduct>`
  position: relative;
  ${flex({})};
  ${gap({ spaceKey: 'sm' })};
  width: 100%;
  overflow: hidden;
  height: 8vh;
  
  
  @media (min-width: 550px) {
    height: 8vh;
    ${flex({ direction: 'column' })};
    ${padding({ spaceKey: 'sm' })}
    ${borderRadius({ radiusKey: 'md' })};
    width: 100%;
    height: 100%;
    background-color: ${({ theme, $hasProduct }) =>
      $hasProduct ? '#25207463' : theme.colors.opacity.base};
  }
`

export const SContainerThumb = styled.div`
  display: none;
  grid-area: containerThumb;
  overflow: hidden;
  width: 100%;
  height: 100%;
  ${borderRadius({ radiusKey: 'md' })};

  @media (min-width: 550px) {
    ${flex({})};
  }
`

export const SContainerEmptyThumb = styled.span`
  ${flex({ direction: 'column' })};
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  ${padding({ spaceKey: 'sm' })};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.reverseText};

  span {
    font-size: 5em;
  }
`

export const STitleCollection = styled.span`
  grid-area: titleCollection;
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  ${padding({ spaceKey: 'md' })};
  ${borderRadius({ radiusKey: 'md' })};
  ${flex({justfy:'start'})};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.surface};
  color: ${({ theme }) => theme.colors.text.text};
  font-weight: 900;
  
  @media (min-width: 550px) {
    ${padding({ spaceKey: 'sm' })};
    ${flex({})};
    height: fit-content;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text.reverseText};
  }
`

export const SBtnCollection = styled(CustomButton)<PropsHasProduct>`
  position: absolute;
  ${flex({})};
  ${padding({ spaceKey: 'sm' })};
  ${borderRadius({ radiusKey: 'md' })};
  padding: ${({ theme }) => theme.spaces.sm} ${({ theme }) => theme.spaces.md};
  height: 100%;
  width: fit-content;
  color: ${({ theme }) => theme.colors.background.surface};
  background-color: ${({ $hasProduct, theme }) =>
    $hasProduct ? theme.colors.button.inactive : theme.colors.button.default};
  font-size: ${({ theme }) => theme.iconSize.md};
  right: 0;

  @media (min-width: 550px) {
    top: 5px;
    right: 5px;
    height: 50px;
    width: 50px;
    font-size: ${({ theme }) => theme.iconSize.sm};
    transition: all ease-in-out 0.2s;

    &:hover {
      background-color: ${({ $hasProduct, theme }) =>
        $hasProduct ? theme.colors.feedback.error : theme.colors.feedback.success};
    }
  }
`

export const SFeedbackCollection = styled(motion.span)`
  ${flex({})};
  ${font({ fontKey: 'secondary', sizeKey: 'md' })};
  ${borderRadius({ radiusKey: 'md' })};
  ${padding({ spaceKey: 'md' })};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.text};
  font-weight: 600;
  width: 70%;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  word-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.feedback.success};
  ${font({ fontKey: 'secondary', sizeKey: 'xsm' })}

  @media (min-width: 550px) {
    width: 20%;
  }
`

export const SContainerButtonAdd = styled.div`
  ${flex({ justfy: 'end' })};
  width: 100%;
  height: 100%;

  .buttonAdd {
    ${font({ fontKey: 'secondary', sizeKey: 'md' })}
    width: 50px;
  }
`