'use client';

import styled from 'styled-components';
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins';

type SsectionProps = {
  $viewPortStyle: 'sm' | 'md' | 'lg' | 'xl' | null;
};

export const Ssection = styled.section<SsectionProps>`
  position: relative;
  z-index: 0;
  ${flex({ align: 'center', justfy: 'start' })}
  ${padding({spaceKey: 'md'})}
  width: 100%;
  height: ${({ $viewPortStyle }) =>
    $viewPortStyle === 'lg' || $viewPortStyle === 'xl'
      ? '90dvh'
      : '100dvh'};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.high};
`;

export const ScontainerCardProduct = styled.ul`
  position: absolute;
  top: 110%;
  left: 50%;
  ${flex({})}
  ${padding({spaceKey:'md'})}
  ${borderRadius({radiusKey:'md'})}
  width: 90vw;
  height: 50vh;
  transform: translateX(-50%);


  
  
  .swiper-container {
    ${borderRadius({radiusKey:'sm'})}
    padding: 0 50px;
    height: 100%;
  }

  .swiper-itens {
    height: 100%;
  }
`;

type SformInSectionProps = {
  $props: boolean;
  $viewPortStyle: 'sm' | 'md' | 'lg' | 'xl' | null;
};

export const SformInSection = styled.form<SformInSectionProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${(props) => (props.$props === true ? '15%' : '50%')};
  left: 50%;
  ${flex({ direction: 'column' })};
  ${padding({spaceKey: 'md'})}
  ${gap({spaceKey: 'md'})} 
  flex: 0.5;
  height: fit-content;
  z-index: 100;
  transition: all ease-in-out 0.1s;
  width: ${({ $viewPortStyle }) =>
    $viewPortStyle === 'lg' || $viewPortStyle === 'xl'
      ? '50vw'
      : '90vw'};
`;


export const Stitle = styled.h1`
  ${font({fontKey:'primary', sizeKey:'lg'})}
  color: ${({ theme }) => theme.colors.title.primary};
  font-weight: 100;
`;

export const ScontainerInput = styled.div<SsectionProps>`
  ${flex({})};
  width: 100%;
  height: 80px;

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
    ${flex({})}
    ${padding({spaceKey: 'md'})};
    ${(borderRadius({radiusKey:'md'}))}
    ${({ $viewPortStyle }) =>
      $viewPortStyle === 'lg' || $viewPortStyle === 'xl' || $viewPortStyle === 'md'
        ? font({ fontKey: 'secondary', sizeKey: 'xsm' })
        : font({ fontKey: 'secondary', sizeKey: 'md' })
    }
    overflow: hidden;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background.base};

    &:focus {
      outline: none;
      border: solid 1px ${({ theme }) => theme.colors.border.active};
    }
    ;
  }
`;