'use client';

import { borderRadius, flex, font, gap, padding } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.main`
  ${flex({})}
  width: 100%;
  height: 90dvh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.background.base};

  @media (min-width: 550px) {
    padding: 0 50px;
  }

  @media (min-width: 1000px) {
    padding: 0 50px;
  }
`;

export const SSection = styled.section`
  display: grid;
  justify-self: start;
  align-self: start;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    'smainImg smainImg smainImg'
    'scontent scontent scontent '
    'sinfo sinfo sinfo';
  ${gap({ spaceKey: 'md' })}
  width: 95%;
  height: fit-content;
  padding-top: 10px;
  z-index: 0;

  @media (min-width: 550px) {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'smainImg smainImg sinfo'
      'scontent scontent scontent ';
  }
`;

export const SContent = styled.div`
  ${flex({ direction: 'column', align: 'start' })};
  ${gap({ spaceKey: 'md' })}
  ${borderRadius({ radiusKey: 'md' })}
    grid-area: scontent;
  width: 100%;
  height: fit-content;
  backdrop-filter: blur(30px);
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.high};
`;

export const STextContent = styled.div`
  ${flex({ direction: 'column', align: 'start', justfy: 'space-between' })};
  height: auto;
  ${gap({ spaceKey: 'md' })}
  ${padding({ spaceKey: 'lg' })}

    h1 {
    ${font({ fontKey: 'primary', sizeKey: 'md' })}
    color: ${({ theme }) => theme.colors.title.reverse};
    font-weight: 100;
    text-transform: uppercase;
    height: 50%;
  }

  p {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    color: ${({ theme }) => theme.colors.text.text};
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 1em;
    height: 50%;
    width: auto;
    justify-content: ce;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const SContainerBtnContent = styled.div`
  ${flex({ align: 'center', justfy: 'center' })};
  width: 100%;
  height: 10dvh;
  background-color: ${({ theme }) => theme.colors.background.medium};
`;

export const SArrows = styled.div`
  ${flex({ align: 'center', justfy: 'center' })};
  ${padding({ spaceKey: 'sm' })};
  color: ${({ theme }) => theme.colors.button.default};
  height: 100%;
  width: 15%;
  font-size: clamp(0.7px, 1.5rem, 8vw);

  @media (min-width: 550px) {
    display: none;
  }
`;

export const SBtnContent = styled.div`
  ${flex({ justfy: 'start' })}
  ${gap({ spaceKey: 'md' })}
    ${padding({ spaceKey: 'md' })}
    width: 100%;
  overflow-x: scroll;

  button {
    ${flex({})}
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    ${gap({ spaceKey: 'md' })}
    font-weight: 600;
    padding: 5px 15px;
    background-color: ${({ theme }) => theme.colors.link.primary};
    color: ${({ theme }) => theme.colors.text.reverseText};
    border-radius: 10px;
    transition: all.2s ease-in-out;
    width: 80%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.link.activePrimary};
      color: ${({ theme }) => theme.colors.text.reverseText};
    }
  }
`;

export const SInfo = styled.div`
  grid-area: sinfo;
  ${flex({ direction: 'column', align: 'start' })};
  ${borderRadius({ radiusKey: 'md' })};
  ${gap({ spaceKey: 'sm' })};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.high};
  backdrop-filter: blur(30px);
  overflow: hidden;
  `;

export const SType = styled.div`
  ${flex({ justfy: 'start', align: 'center' })}
  ${padding({ spaceKey: 'md' })}
  background-color: ${({ theme }) => theme.colors.background.medium};
  width: 100%;
  height: fit-content;
  
  h2 {
      ${flex({})}
      ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
      color: ${({ theme }) => theme.colors.title.reverse};
      font-weight: 600;
      letter-spacing: 1px;
      height: 100%;
    }
    `;

export const ScontainerTag = styled.div`
  ${flex({ direction: 'column', align: 'start', justfy: 'space-between' })}
  ${gap({ spaceKey: 'md' })}
    ${padding({ spaceKey: 'md' })}
    width: 100%;
  height: 100%;
`;

export const Stag = styled.div`
  ${flex({ direction: 'column', align: 'start' })}
  ${gap({ spaceKey: 'sm' })}
    width: 100%;

  h2 {
    ${flex({ justfy: 'start' })}
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
        color: ${({ theme }) => theme.colors.title.reverse};
    font-weight: 600;
  }
`;

export const SContainerContentTag = styled.div`
${flex({})}
width: 100%;
`;

export const SContainerItens = styled.div`
  ${flex({ justfy: 'start' })}
  ${gap({ spaceKey: 'md' })}
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;

  @media (min-width: 550px) {
    flex-direction: column;
  }

  span {
    ${flex({justfy:'start'})}
    ${gap({ spaceKey: 'sm' })}
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    ${borderRadius({ radiusKey: 'sm' })}
    height: fit-content;
    width: 100%;
    padding: 5px 15px;
    background-color: ${({ theme }) => theme.colors.background.surface};
    font-weight: 600;
    font-style: italic;
  }
`;
