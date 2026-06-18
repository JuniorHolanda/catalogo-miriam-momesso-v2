'use client'

import { entraceToBottom, entraceToLeft } from '@/styles/animations'
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
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
  ${borderRadius({ radiusKey: 'md' })}
  grid-area: scontent;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background.high};
  opacity: 0;
  animation: ${entraceToLeft} ease-in-out 0.6s .7s forwards;

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

  h1 {
    ${font({ fontKey: 'secondary', sizeKey: 'md' })}
    color: ${({ theme }) => theme.colors.title.reverse};
    font-weight: 900;
    text-transform: uppercase;
  }

  p {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    color: ${({ theme }) => theme.colors.text.text};
    font-weight: 500;
    letter-spacing: 1px;
    width: auto;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`

export const SContainerBtnActions = styled.div`
  grid-area: btnAction;
  ${flex({ justfy: 'start' })};
  ${gap({ spaceKey: 'md' })}
  ${padding({ spaceKey: 'md' })}
  ${borderRadius({ radiusKey: 'md' })}
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background.high};
  opacity: 0;
  animation: ${entraceToBottom} ease-in-out 0.5s .7s forwards;
  border: solid #485;

  @media (min-width: 550px) {
    ${flex({ align: 'center', justfy: 'start' })};
    height: 100%;
    width: 100%;
  }
`

export const SInfo = styled.div`
  grid-area: sinfo;
  ${flex({ direction: 'column', align: 'start', justfy: 'start' })};
  ${borderRadius({ radiusKey: 'md' })};
  ${gap({ spaceKey: 'sm' })};
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background.high};
  backdrop-filter: blur(30px);
    opacity: 0;
  animation: ${entraceToLeft} ease-in-out 0.5s 0.6s forwards;

  @media (min-width: 550px) {
    height: 100%;
  }
`

export const SType = styled.div`
  ${flex({ justfy: 'start', align: 'center' })}
  ${padding({ spaceKey: 'md' })}
  width: 100%;
  height: fit-content;

  h2 {
    ${flex({})}
    ${font({ fontKey: 'secondary', sizeKey: 'md' })}
    color: ${({ theme }) => theme.colors.title.reverse};
    font-weight: 900;
    text-transform: uppercase;
    height: 100%;
  }
`

export const ScontainerTag = styled.div`
  ${flex({ direction: 'column', align: 'start', justfy: 'space-between' })}
  ${gap({ spaceKey: 'md' })}
  ${padding({ spaceKey: 'md' })}
  width: 100%;
  height: fit-content;
`

export const Stag = styled.div`
  ${flex({ direction: 'column', align: 'start' })}
  ${gap({ spaceKey: 'sm' })}
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.default};
  padding-bottom: ${({ theme }) => theme.spaces.sm};

  h2 {
    ${flex({ justfy: 'start' })}
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    width: 100%;
    text-transform: uppercase;
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
      ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
      font-weight: 400;
      text-transform: capitalize;
    }
  }
`
