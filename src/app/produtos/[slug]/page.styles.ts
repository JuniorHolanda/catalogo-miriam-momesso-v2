'use client'

import CustomLink from '@/components/ui/Link'
import { entraceToLeft } from '@/styles/animations'
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SWrapper = styled.section`
  ${flex({ direction: 'column', justfy: 'start' })}
  ${gap({ spaceKey: 'md' })}
  ${padding({ spaceKey: 'md' })}
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.surface};
  overflow-y: auto;

  @media (min-width: 550px) {
    display: grid;
    justify-items: start;
    align-items: start;
    overflow-y: hidden;
    height: 100%;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 7fr 2fr;
    grid-template-areas:
      'smainImg smainImg sinfo'
      'smainImg smainImg scontent'
      'btnAction btnAction scontent ';
  }
`

export const SContent = styled.div`
  ${flex({ direction: 'column', align: 'start' })};
  ${gap({ spaceKey: 'md' })}
  ${borderRadius({ radiusKey: 'lg' })}
  grid-area: scontent;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background.high};
  opacity: 0;
  animation: ${entraceToLeft} ease-in-out 0.6s 0.7s forwards;

  @media (min-width: 550px) {
    overflow-y: auto;
    height: 100%;
    scrollbar-width: none; //Firefox
    -ms-overflow-style: none;
  }
`

export const STextContent = styled.div`
  ${flex({ direction: 'column', align: 'start', justfy: 'start' })};
  ${gap({ spaceKey: 'md' })}
  ${padding({ spaceKey: 'lg' })}
  height: 100%;
  overflow: auto;

  h1 {
    ${font({ fontKey: 'secondary', sizeKey: 'xsm' })}
    color: ${({ theme }) => theme.colors.title.reverse};
    font-weight: 900;

    /* primeira letra uppercase */
    &::first-letter {
      text-transform: uppercase;
    }
  }

  p {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    color: ${({ theme }) => theme.colors.text.text};
    font-weight: 500;
    letter-spacing: 1px;
    width: auto;

    /* primeira letra uppercase */
    &::first-letter {
      text-transform: uppercase;
    }
  }
`

export const SContainerBtnActions = styled(motion.div)`
  grid-area: btnAction;
  ${flex({ justfy: 'start' })};
  ${gap({ spaceKey: 'md' })};
  ${padding({ spaceKey: 'md' })};
  ${borderRadius({ radiusKey: 'lg' })};
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background.high};

  @media (min-width: 550px) {
    ${flex({ align: 'center', justfy: 'start' })};
    height: 100%;
    width: 100%;
  }
`
export const BtnBuget = styled(CustomLink)`
  ${flex({ direction:'row', justfy: 'center' })};
  ${gap({ spaceKey: 'md' })};
  ${padding({ spaceKey: 'md' })};
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.button.focus};

  span {
    display: none;

    @media (min-width: 550px) {
      display: block;
    }
  }
`

export const SInfo = styled.div`
  grid-area: sinfo;
  ${flex({ direction: 'column', align: 'start', justfy: 'start' })};
  ${borderRadius({ radiusKey: 'lg' })};
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background.high};
  backdrop-filter: blur(30px);
  opacity: 0;
  animation: ${entraceToLeft} ease-in-out 0.5s 0.6s forwards;

  /* @media (min-width: 550px) {
        height: 100%;
        } */
`

export const SType = styled.div`
  ${flex({ justfy: 'start', align: 'center' })}
  ${padding({ spaceKey: 'md' })}
  padding-bottom: 0;
  width: 100%;
  /* height: fit-content; */

  h2 {
    ${flex({ justfy: 'start' })}
    ${font({ fontKey: 'secondary', sizeKey: 'xsm' })}
    color: ${({ theme }) => theme.colors.title.reverse};
    font-weight: 900;
    width: 100%;
  }
`

export const ScontainerTag = styled.div`
  ${flex({ direction: 'column', align: 'start', justfy: 'space-between' })}
  ${gap({ spaceKey: 'sm' })}
  ${padding({ spaceKey: 'md' })}
  width: 100%;
  height: fit-content;

  hr {
    border: none;
    margin: 0;
    padding: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.opacity.base};
  }
`

export const Stag = styled.div`
  ${flex({ direction: 'column', align: 'start' })}
  ${gap({ spaceKey: 'sm' })}
  width: 100%;
  height: fit-content;

  h2 {
    ${flex({ justfy: 'start' })}
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    width: 100%;
    color: ${({ theme }) => theme.colors.title.reverse};
    font-weight: 900;
  }
`

export const SContainerContentTag = styled.div`
  ${flex({})}
  width: 100%;
`

export const SContainerItens = styled.ul`
  ${flex({ justfy: 'start' })}
  ${gap({ spaceKey: 'sm' })}
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none; // esconder a barra no edge antigo

  @media (min-width: 550px) {
    flex-direction: row;
  }

  li {
    ${flex({ justfy: 'start' })}
    ${gap({ spaceKey: 'sm' })}
    ${borderRadius({ radiusKey: 'sm' })}
    height: fit-content;
    width: 100%;
    width: fit-content;
    span {
      color: ${({ theme }) => theme.colors.text.text};
      ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
      color: ${({ theme }) => theme.colors.text.secondaryText};
      font-weight: 600;
      text-transform: capitalize;
    }
  }
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
