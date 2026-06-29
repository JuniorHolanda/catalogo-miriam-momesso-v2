'use client'

import styled from 'styled-components'
import { borderRadius, flex, font, gap, gridForCardsContainer, padding } from '@/styles/mixins'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Ssection = styled.section`
  ${flex({ align: 'center', justfy: 'center' })};
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const SformInSection = styled.form<SformInSectionProps>`
  position: relative;
  ${flex({ direction: 'column' })};
  ${gap({ spaceKey: 'md' })}
  z-index: 100;
  transition: all ease-in-out 0.1s;
  width: 100%;
  height: 100%;
`
type SformInSectionProps = {
  $props: boolean
}

export const Stitle = styled.h1`
  ${font({ fontKey: 'primary', sizeKey: 'lg' })}
  color: ${({ theme }) => theme.colors.title.primary};
  font-weight: 100;
  width: 100%;
  text-align: center;
  height: auto;
`

export const SMotionTitle = styled(motion.div)`
  ${flex({})}
`

export const SMotionInput = styled(motion.div)`
  ${flex({})}
  width: 100%;
`
type PropsSContainerInput = {
  $haveContent: boolean
}
export const ScontainerInput = styled.div<PropsSContainerInput>`
  ${flex({})};
  ${padding({ spaceKey: 'md' })};
  position: ${({ $haveContent }) => {
    return $haveContent ? 'absolute' : 'static'
  }};
  top: 0;
  width: 100%;
  height: 12vh;
  z-index: 3;
  background-color: ${({ theme, $haveContent }) =>
    $haveContent ? theme.colors.opacity.base : 'transparent'};
  backdrop-filter: blur(5px);

  label {
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  input {
    ${flex({})};
    ${padding({ spaceKey: 'md' })};
    ${borderRadius({ radiusKey: 'md' })};
    ${font({ fontKey: 'secondary', sizeKey: 'xsm' })};
    overflow: hidden;
    width: 60%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text.text};
    background-color: ${({ theme }) => theme.colors.background.base};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.text};
    }

    &:focus {
      outline: none;
      border: solid 1px ${({ theme }) => theme.colors.border.active};
    }
  }
`
export const SMotionSwiper = styled(motion.div)`
  ${flex({})}
  width: 100%;
`

export const SContainerHoliday = styled.div`
  ${flex({})}
  ${gap({ spaceKey: 'md' })}
  width: 100%;
  height: auto;

  .swiper {
    ${flex({})}
    width: 100%;
    height: 100%;

    .swiper-wrapper {
      transition-timing-function: linear !important;
      height: 100%;

      .swiper-slide {
        ${flex({})}
        width: 100%;
        height: 100%;
      }
    }
  }
`

export const SContainerResponseSearch = styled.div`
  position: absolute;
  z-index: 1;
  ${padding({ spaceKey: 'xlg' })};
  padding-top: 15vh;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.opacity.base};
  backdrop-filter: blur(30px);
  align-items: stretch;
`
export const SContainerCard = styled.span`
  ${gridForCardsContainer()}
  ${gap({ spaceKey: 'md' })};
  justify-content: center;
  width: 100%;
  height: auto;
`
export const SMotionCard = styled(motion.div)`
  ${flex({})};
`

export const SLottie = styled.div`
  ${flex({ direction: 'column', justfy: 'start' })}
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
  }

  p {
    ${font({ fontKey: 'secondary', sizeKey: 'md' })}
    font-weight: 100;
    color: ${({ theme }) => theme.colors.text.text};
  }
`

export const SLink = styled(Link)`
  position: relative;
  ${flex({ direction: 'column' })};
  ${gap({ spaceKey: 'sm' })};
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.text};
`

export const SImage = styled(Image)`
  ${borderRadius({ radiusKey: 'lg' })};
  object-fit: cover;
  object-position: center;
  opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.4 : 1)};
  transition: all ease-in-out 0.2s;
  &:hover {
    opacity: 1;
  }
`

export const SContainerInfoHoliday = styled.div`
  position: absolute;
  ${borderRadius({ radiusKey: 'lg' })};
  bottom: 0;
  ${flex({ direction: 'column', justfy: 'center', align: 'center' })}
  ${padding({ spaceKey: 'md' })};
  align-items: center;
  width: 100%;
  height: fit-content;
  background-image: linear-gradient(0deg, #000000a1, #ffffff00);

  h2 {
    ${font({ fontKey: 'secondary', sizeKey: 'xsm' })}
    font-weight: 400;
    color: ${({ theme }) =>
      theme.mode === 'light' ? theme.colors.text.reverseText : theme.colors.text.text};
  }
`
