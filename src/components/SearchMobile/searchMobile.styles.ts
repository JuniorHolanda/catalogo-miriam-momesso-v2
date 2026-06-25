'use client'

import { entraceToTop } from '@/styles/animations'
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import Link from 'next/link'
import styled from 'styled-components'

export const ScontainerInput = styled.form`
  ${flex({})};
  ${padding({ spaceKey: 'md' })};
  background-color: ${({ theme }) => theme.colors.background.high};
  width: 100%;
  height: 10vh;


  
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
    ${borderRadius({ radiusKey: 'lg' })};
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
  `

export const SContainerProductsFinded = styled.ul`
  ${flex({ direction: 'column', justfy: 'start', align: 'start' })}
  ${gap({ spaceKey: 'md' })}
  ${padding({ spaceKey: 'md' })}
  z-index: 10012; // por conta do swiper que internamente tem um z-index 999 e o conteudo dele 1000 e barra de progresso 1001
  position: fixed;
  height: 80dvh;
  width: 100%;
  top: 10dvh;
  backdrop-filter: blur(50px);
  background-color: ${({ theme }) => theme.colors.opacity.base};
  overflow-y: scroll;
  opacity: 0;
  animation: ${entraceToTop} 0.5s ease-in-out forwards;
  
  li {
    ${flex({ align: 'center', justfy: 'start' })}
    ${padding({ spaceKey: 'sm' })}
    ${gap({ spaceKey: 'md' })}
    width: 100%;
  }
`

export const SLink = styled(Link)`
  ${flex({})}
  ${gap({ spaceKey: 'md' })}

  span {
    border-radius: 300px;
    overflow: hidden;
  }

  h2 {
    ${font({ fontKey: 'secondary' })}
  }
`

export const SLottie = styled.div`
  ${flex({ direction: 'column', justfy: 'start' })}
  width: 100%;
  height: 100%;
  z-index: 9999999999999999999999;

  h2 {
    ${flex({})}
    width: 100%;
    overflow-wrap: anywhere;
    ${font({ fontKey: 'primary', sizeKey: 'lg' })}
    text-align: center;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.title.reverse};
  }
  
  p {
    ${font({ fontKey: 'secondary', sizeKey: 'md' })}
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.reverseText};
  }
`
