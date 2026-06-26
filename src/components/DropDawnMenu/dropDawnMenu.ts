'use client'
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'

export const SWrapper = styled(motion.section)`
  ${flex({ direction: 'column', justfy: 'start' })};
  ${gap({ spaceKey: 'md' })};
  ${padding({ spaceKey: 'lg' })};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.opacity.base};
  backdrop-filter: blur(30px);
  overflow: auto;

  @media (min-width: 550px) {
    ${padding({ spaceKey: 'xlg' })};
    position: absolute;
    top: 0vh;
    left: 0;
    ${flex({})};
    overflow: visible;
    top: 10vh;
    height: 85vh;
  }
`

export const SContainerblockCategory = styled.div`
  ${gap({ spaceKey: 'md' })};
  ${flex({ direction: 'column', justfy: 'start' })};
  width: 100%;
  height: auto;

  @media (min-width: 550px) {
    height: 100%;
    width: auto;
  }
`
export const SContainerTitleCat = styled.div`
  ${flex({ justfy: 'start' })}
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  color: ${({ theme }) => theme.colors.title.primary};
  width: 100%;
  word-break: break-all;
`

export const SContainerListCat = styled.ul`
  ${flex({ direction: 'column' })}
  ${gap({ spaceKey: 'sm' })}
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 550px) {
    ${flex({ justfy: 'start' })}
  }
`

export const SLiCards = styled(motion.li)`
  ${flex({ justfy: 'start' })};
  ${borderRadius({ radiusKey: 'md' })};
  width: 100%;
  height: fit-content;

  ${padding({ spaceKey: 'sm' })};
  @media (min-width: 550px) {
    background-color: ${({ theme }) => theme.colors.opacity.primary};
    width: fit-content;
  }
`
export const STitleCategory = styled.div`
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  font-weight: 400;
  height: fit-content;
  color: ${({ theme }) => theme.colors.text.text};
  transition: all ease-in-out 0.2s;
`

export const SLink = styled(Link)`
  ${flex({ align: 'start', justfy: 'start' })}
  ${gap({ spaceKey: 'md' })};
  align-items: center;

  &:hover ${STitleCategory} {
    color: ${({ theme }) => theme.colors.link.hover};
  }

  @media (min-width: 550px) {
    ${padding({ spaceKey: 'sm' })};
    ${flex({ direction: 'column', align: 'start', justfy: 'start' })}
    height: 100%;
    width: 100%;
  }
`
export const SContainerThumb = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;

  @media (min-width: 550px) {
    width: fit-content;
    height: auto;
    ${borderRadius({ radiusKey: 'md' })};
    display: block;
  }
`
