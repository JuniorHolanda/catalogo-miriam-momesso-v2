'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { flex } from '@/styles/mixins';
import { rotatePendulum } from '@/styles/animations';

export const ScontainerCardProduct = styled.ul`
  ${flex({})}
  position: absolute;
  transform: translateX(-50%);
  top: 110%;
  left: 50%;
  width: 90vw;
  height: 50vh;
  border-radius: 30px;

  .swiper-container {
    padding: 0 50px;
    height: 100%;
  }

  .swiper-itens {
    height: 100%;
  }
`;


type SsectionProps = {
  $viewPortStyle: 'sm' | 'md' | 'lg' | 'xl' | null;
};

export const Ssection = styled.section<SsectionProps>`
  position: relative;
  z-index: 0;
  margin-top: ${({ $viewPortStyle, theme }) =>
    $viewPortStyle === 'sm' || $viewPortStyle === 'md' ? 0 : `calc(10vh + ${theme.spaces.xLarge})`};
  margin-bottom: ${({ $viewPortStyle, theme }) =>
    $viewPortStyle === 'sm' || $viewPortStyle === 'md' ? `calc(12vh + ${theme.spaces.xLarge})` : 0};
  ${flex({ align: 'center', justfy: 'start' })}
  padding: ${({ theme }) => theme.spaces.xLarge};
  width: 100%;
  height: ${({ $viewPortStyle, theme }) =>
    $viewPortStyle === 'lg' || $viewPortStyle === 'xl'
      ? `calc(85vh - ${theme.spaces.xLarge})`
      : '100vh'};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadios.Xlarge};
  background-color: ${({ theme }) => theme.colors.backgroundAccent};
`;

export const SbrutalSymbol = styled.span`
  position: absolute;
  top: -50%;
  left: -40%;
  z-index: 20;
  width: clamp(400px, 150em, 80vw);
  animation: ${rotatePendulum} 25s ease-in-out alternate-reverse infinite;
  opacity: 0.2;

  img {
    width: 100%;
  }
`;

type SformInSectionProps = {
  $props: boolean;
};

export const SformInSection = styled.form<SformInSectionProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${(props) => (props.$props === true ? '15%' : '50%')};
  left: 50%;
  ${flex({ direction: 'column' })};
  padding: ${({ theme }) => theme.spaces.medium};
  gap: ${({ theme }) => theme.spaces.medium};
  flex: 0.5;
  height: fit-content;
  width: fit-content;
  z-index: 100;
  transition: all ease-in-out 0.1s;
`;


export const Stitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

export const ScontainerInput = styled.div`
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
    border-radius: ${({ theme }) => theme.borderRadios.large};
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => theme.spaces.medium};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.commonFont};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;