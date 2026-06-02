'use client'
import styled from 'styled-components'
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'

export const Scard = styled.article`
  display: none;
  ${gap({ spaceKey: 'md' })}
  ${padding({ spaceKey: 'md' })}
  ${borderRadius({ radiusKey: 'md' })}
  width: 100%;
  height: 100%;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => theme.colors.background.surface};

  @media (min-width: 550px) {
    ${flex({ direction: 'column' })}
    flex: 0 0 calc((100% - 45px) / 4);
    height: 400px;
  }
`

export const ScontainerSlider = styled.section`
  ${flex({})}
  ${gap({ spaceKey: 'sm' })} 
  ${padding({ spaceKey: 'sm' })}
  height: 60%;
  width: 100%;

  :nth-child(1) {
    width: 50%;

    &:hover {
      width: 100%;
    }
  }

  :nth-child(2) {
    width: 50%;

    &:hover {
      width: 100%;
    }
  }
`

export const Scontent = styled.div`
  position: relative;
  justify-content: space-between;
  ${flex({ direction: 'column', justfy: 'space-between', align: 'start' })}
  ${gap({ spaceKey: 'sm' })}
  ${padding({ spaceKey: 'sm' })}
  width: 100%;
  height: 40%;
  overflow: hidden;
  z-index: 1;

  h1 {
    ${font({ fontKey: 'primary', sizeKey: 'xsm' })}
    font-weight: 100;
    color: ${({ theme }) => theme.colors.pallet.primaryUp};
    white-space: nowrap;
    text-transform: capitalize;
  }

  p {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
  }
`
