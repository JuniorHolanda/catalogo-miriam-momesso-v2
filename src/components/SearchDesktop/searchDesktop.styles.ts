'use client';

import styled from 'styled-components';
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins';
import Link from 'next/link';
import Image from 'next/image';
import { entraceToTop } from '@/styles/animations';

export const Ssection = styled.section`
  z-index: 0;
  ${flex({ align: 'center', justfy: 'center' })}
  ${padding({ spaceKey: 'md' })}
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 500) {
    height: 90dvh;
  }
`;

export const SformInSection = styled.form<SformInSectionProps>`
  position: relative;
  ${flex({ direction: 'column' })};
  ${padding({ spaceKey: 'md' })}
  ${gap({ spaceKey: 'md' })} 
  flex: 0.5;
  z-index: 100;
  transition: all ease-in-out 0.1s;
  width: 90vw;
  height: 100%;
`;

export const ScontainerCardProduct = styled.ul`
  ${flex({})}
  ${padding({ spaceKey: 'md' })}
  ${borderRadius({ radiusKey: 'md' })}
  width: 90vw;
  height: 50vh;
  opacity: 0;
  animation: ${entraceToTop} .3s ease-in-out forwards;
  
  .swiper-container {
    ${borderRadius({ radiusKey: 'sm' })}
    padding: 0 50px;
    height: 100%;
  }

  .swiper-itens {
    height: 100%;
  }
`;

type SformInSectionProps = {
  $props: boolean;
};

export const Stitle = styled.h1`
  ${font({ fontKey: 'primary', sizeKey: 'lg' })}
  color: ${({ theme }) => theme.colors.title.primary};
  font-weight: 100;
  width: 100%;
  text-align: center;
  height: auto;
  `;

export const ScontainerInput = styled.div`
  ${flex({})};
  width: 50%;
  height: 10%;

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

export const SContainerHoliday = styled.div`
  ${flex({})}
  ${gap({ spaceKey: 'md' })}
  width: 100%;
  height: auto;

  .swiper{
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
`;

export const SLink = styled(Link)`
  ${flex({ direction: 'column' })}
  ${gap({ spaceKey: 'sm' })}
  ${padding({ spaceKey: 'lg' })}
  ${borderRadius({ radiusKey: 'md' })}
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.high};
  color: ${({ theme }) => theme.colors.text.text};
`;

export const SImage = styled(Image)`
  ${borderRadius({radiusKey:'sm'})}
  object-fit: cover;
  object-position: center;
`;

export const SContainerInfoHoliday = styled.div`
  ${flex({ direction: 'column', justfy: 'center', align: 'center' })}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;

  h2 {
    ${font({ fontKey: 'secondary', sizeKey: 'xsm' })}
    font-weight: 900;
  }
`;
