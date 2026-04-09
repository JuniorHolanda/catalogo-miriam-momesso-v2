'use client';

import { entraceToTop } from '@/styles/animations';
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

export const ScontainerInput = styled.form`
  ${flex({})};
  width: 50%;
  height: 7%;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  label {
    position: absolute;
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
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background.base};

    &:focus {
      outline: none;
      border: solid 1px ${({ theme }) => theme.colors.border.active};
    }
  }
`;

export const SContainerProductsFinded = styled.ul`
  ${flex({ direction: 'column', justfy: 'start', align: 'start' })}
  ${gap({spaceKey:'md'})}
  ${padding({spaceKey:'md'})}
  z-index: 10012; // por conta do swiper que internamente tem um z-index 999 e o conteudo dele 1000 e barra de progresso 1001
  position: fixed;
  height: 90dvh;
  width: 100%;
  top: 10vh;
  backdrop-filter: blur(50px);
  background-color: ${({ theme }) => theme.colors.opacity.base};
  overflow-y: scroll;
  opacity: 0;
  animation: ${entraceToTop} .5s ease-in-out forwards;
  
  li {
    ${flex({align: 'center', justfy: 'start'})}
    ${padding({spaceKey:'sm'})}
    ${gap({spaceKey:'md'})}
    width: 100%;
  }
  `;

export const SLink = styled(Link)`
  ${flex({})}
  ${gap({spaceKey:'md'})}

  span {
    border-radius: 300px;
    overflow: hidden;
  }

  h2 {
    ${font({fontKey: 'secondary'})}
  }
`;
