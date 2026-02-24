'use client';
import styled from 'styled-components';
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins';

export const Scard = styled.article`
  ${flex({direction:'column'})}
  ${gap({spaceKey: 'md'})} 
  ${padding({spaceKey: 'md'})}
  ${borderRadius({radiusKey:'md'})}
  width: 100%;
  min-width: 400px;
  max-width: 600px;
  height: 100%;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.colors.background.surface};
`;

export const ScontainerSlider = styled.section`
  ${(flex({}))}
  ${gap({spaceKey: 'sm'})} 
  ${padding({spaceKey: 'sm'})}
  height: 60%;
  overflow: hidden;
`;

export const ScontainerImg = styled.div<{ $expand: number }>`
  ${flex({})}
  flex: ${({ $expand }) => $expand};
  ${borderRadius({radiusKey:'md'})}
  height: 100%;
  min-width: 100px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    transition: all ease-in-out .3s;

    &:hover {
      scale: 120%;
    }
  }
`;

export const Scontent = styled.div`
  position: relative;
  justify-content: space-between;
  ${flex({direction:'column', justfy:'space-between', align:'start'})}
  ${gap({spaceKey: 'md'})}
  ${padding({spaceKey: 'md'})}
  width: 100%;
  height: 40%;
  overflow: hidden;
  z-index: 1;

  h1 {
    ${font({fontKey:'primary', sizeKey:'md'})}
    word-wrap: nowrap;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.pallet.primaryUp};
  }

  p {
    ${font({fontKey:'secondary', sizeKey:'sm'})}
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
  }
`;
