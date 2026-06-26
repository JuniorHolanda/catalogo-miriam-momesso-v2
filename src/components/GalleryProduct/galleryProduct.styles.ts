'use client'

import { borderRadius, flex, gap } from '@/styles/mixins'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SWrapper = styled.div`
  grid-area: smainImg;
  ${flex({ direction: 'column' })};
  ${gap({ spaceKey: 'md' })}
  width: 100%;
  height: 100%;

  @media (min-width: 550px) {
    ${flex({ direction: 'column' })};
  }
  @media (min-width: 870px) {
    ${flex({ direction: 'row' })};
  }
`

export const SGallery = styled.div`
  ${flex({})};
  ${gap({ spaceKey: 'md' })}
  grid-area: sgallery;
  width: 100%;
  height: fit-content;

  @media (min-width: 550px) {
    height: 20%;
  }

  @media (min-width: 870px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }
`

export const SMotionGalleryItem = styled(motion.div)`
  ${flex({})};
  ${borderRadius({ radiusKey: 'xlg' })}
  height: 100%;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  img {
    opacity: ${({ theme }) => (theme.mode === 'light' ? 1 : .7)};
    transition: all ease-in-out .2s;

    &:hover {
      opacity: 1;
    }
  }
`

export const SMainImg = styled(motion.div)`
  grid-area: smainImg;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (min-width: 550px) {
    height: 80%;
  }

  @media (min-width: 870px) {
    height: 100%;
  }
  img {
    ${borderRadius({ radiusKey: 'xlg' })}
  }
`
