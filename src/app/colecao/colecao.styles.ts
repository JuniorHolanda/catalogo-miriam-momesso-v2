'use client'

import CustomButton from '@/components/ui/Button'
import ShareButtom from '@/components/ui/ShareButtom'
import { entraceToBottom } from '@/styles/animations'
import { borderRadius, flex, font, gap, gridForCardsContainer, padding } from '@/styles/mixins'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'

export const SWrapper = styled.main`
  ${flex({ direction: 'column', justfy: 'start' })}
  ${gap({ spaceKey: 'md' })}
  ${padding({ spaceKey: 'sm' })}
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background.high};

  @media (min-width: 550px) {
    ${flex({ direction: 'column' })};
    justify-content: flex-start;
  }
`
export const SContainerTitle = styled.div`
  ${flex({ direction: 'column' })};
  color: ${({ theme }) => theme.colors.title.primary};
  opacity: 0;
  animation: ${entraceToBottom} ease-in-out 0.5s forwards;

  h1 {
    ${font({ fontKey: 'primary', sizeKey: 'lg' })};
    font-weight: 100;
    text-transform: capitalize;
    text-align: center;

    @media (min-width: 550px) {
      ${font({ fontKey: 'primary', sizeKey: 'xlg' })};
    }
  }
`

export const SContainerCards = styled.div`
  ${flex({ direction: 'column', justfy: 'start', align: 'center' })};
  ${padding({ spaceKey: 'sm' })};
  ${gap({ spaceKey: 'sm' })};
  width: 100%;
  height: fit-content;

  @media (min-width: 550px) {
    ${gap({ spaceKey: 'md' })};
    ${gridForCardsContainer()}
    justify-content: center;
    height: fit-content;
    width: 100%;
  }
`

export const SContent = styled(motion.div)`
  ${flex({})}
  ${borderRadius({ radiusKey: 'md' })}
  ${padding({ spaceKey: 'md' })}
  ${gap({ spaceKey: 'md' })}
  width: 100%;
  height: fit-content;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.opacity.primary};

  position: relative;

  @media (min-width: 550px) {
    flex-direction: column;
    gap: 0;
    padding: 0;
    height: 100%;
    width: 150px;
  }
`

export const SAnimationCardContainer = styled(motion.div)`
  ${flex({})}
  height: 100%;
  width: 100%;

  @media (min-width: 550px) {
    width: auto;
  }
`

export const Stitle = styled(Link)`
  ${flex({ justfy: 'center', align: 'center' })}
  width: 100%;
  height: 100%;

  @media (min-width: 550px) {
    ${padding({ spaceKey: 'md' })};
    width: 100%;
    height: fit-content;
  }

  h2 {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
    color: ${({ theme }) => theme.colors.text.text};
    width: 100%;
    text-align: center;
    word-break: break-all;
  }
`

export const SContainerThumb = styled(Link)`
  grid-area: thumb;
  overflow: hidden;
  ${flex({})}
  width: 50%;
  height: 100%;
  position: relative;

  .thumb {
    ${borderRadius({ radiusKey: 'md' })}
    object-fit: contain;
    object-position: center;
    overflow: hidden;
    width: 100%;
  }
  @media (min-width: 550px) {
    width: 100%;
  }
`

export const SContainerEmptyThumb = styled.span`
  ${flex({ direction: 'column' })};
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  ${padding({ spaceKey: 'sm' })};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.text};

  height: 100%;

  span {
    font-size: 3em;
  }
`

export const SContainerLottie = styled.div`
  ${flex({})}
  ${borderRadius({ radiusKey: 'md' })}
  ${padding({ spaceKey: 'md' })}
  ${gap({ spaceKey: 'md' })}
  width: 100%;
  height: fit-content;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.high};
  position: relative;

  span {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
  }

  @media (min-width: 550px) {
    flex-direction: column;
    gap: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`

export const SContainerIcons = styled.div`
  ${flex({ justfy: 'start' })};
  ${gap({ spaceKey: 'sm' })};
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  height: 40%;
  position: absolute;
  right: 5px;
  top: 5px;

  & > :nth-child(1) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.feedback.error};
    }
  }

  @media (min-width: 550px) {
    top: 0px;
    right: 0px;
    ${flex({ direction: 'column', justfy: 'start' })};
    ${padding({ spaceKey: 'sm' })};
    width: fit-content;
    height: fit-content;
  }
`

export const SBtnOptionsCard = styled(CustomButton)`
  background-color: ${({ theme }) => theme.colors.opacity.base};
  color: ${({ theme }) => theme.colors.link.primary};
  transition: all ease-in-out 0.2s;
  backdrop-filter: blur(4px);
  width: fit-content;
  height: 100%;
  ${font({ fontKey: 'secondary', sizeKey: 'xsm' })};

  @media (min-width: 550px) {
    height: 40px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.link.reverse};
  }
`

export const SContainerShareBtn = styled.div`
  color: ${({ theme }) => theme.colors.link.primary};
  transition: all ease-in-out 0.2s;
  backdrop-filter: blur(4px);
  ${borderRadius({ radiusKey: 'md' })}
  overflow: hidden;
  height: 100%;

  :hover {
    color: ${({ theme }) => theme.colors.link.reverse};
  }

  @media (min-width: 550px) {
    height: 40px;
  }
`

export const SShareButton = styled(ShareButtom)`
  width: fit-content;
  height: 100%;
  ${font({ fontKey: 'secondary', sizeKey: 'md' })};
  color: ${({ theme }) => theme.colors.link.primary};
  background-color: ${({ theme }) => theme.colors.opacity.base};

  @media (min-width: 550px) {
    ${font({ fontKey: 'secondary', sizeKey: 'xsm' })};
    height: 40px;
  }
`
export const SAnimationNoCollection = styled.div`
  
`;
