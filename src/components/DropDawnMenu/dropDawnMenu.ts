'use client'
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins'
import Link from 'next/link'
import styled from 'styled-components'

export const SWrapper = styled.section`
  ${flex({ direction: 'column', justfy: 'start' })};
  ${gap({ spaceKey: 'md' })};
  width: 100%;
  height: 100%;
  overflow: scroll;

  @media (min-width: 550px) {
    ${flex({ direction: 'row', align: 'start' })}
    ${padding({ spaceKey: 'xlg' })};
    overflow: visible;
    width: 100%;
    height: 100%;
  }
`

export const SNav = styled.nav`
  ${flex({ direction: 'column', align: 'start', justfy: 'start' })}
  ${gap({ spaceKey: 'md' })};
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
  width: 100%;


  @media (min-width: 550px) {
    width: auto;
    height: 100%;
    ${gap({ spaceKey: 'md' })};
    ${flex({ direction: 'column', align: 'start', justfy: 'start' })}
    color: ${({ theme }) => theme.colors.text};
  }
`

export const SContainerListCat = styled.div`
  ${flex({ justfy:'space-between'})}
  width: 100%;
  height: 100%;
      
      
      ul {
    display: grid;
    grid-template: auto / 1fr 1fr 1fr;
    justify-self: start;
    align-self: self-start;
    ${gap({ spaceKey: 'sm' })}
    flex-wrap: wrap-reverse;
    width: 100%;
    

    li {
      ${flex({ direction: 'column', align: 'center', justfy: 'center' })}
      ${borderRadius({ radiusKey: 'lg' })}
      color: ${({ theme }) => theme.colors.text.text};
      overflow: hidden;
      background-color: #00000048;
      

      @media (min-width: 550px) {
        align-items: start;
        justify-content: start;
        width: 100%;
        height: fit-content;
      }
    }
  }
`
export const SLink = styled(Link)`
  ${flex({ direction: 'column',align: 'center', justfy: 'center' })};
  ${gap({ spaceKey: 'sm' })};
  ${padding({ spaceKey: 'md' })};

  @media (min-width: 550px) {
    justify-content: start;
    align-items: start;
  }

  span {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text.reverseText};
  }
`
export const SContainerThumb = styled.div`
  ${flex({})};
  ${borderRadius({ radiusKey: 'md' })}
  overflow: hidden;
  height: 50px;
  width: 50px;
`

export const SContainerTitleCat = styled.div`
  display: block;
  width: 100%;

  h2 {
    ${padding({ spaceKey: 'md' })};
    ${font({ fontKey: 'secondary', sizeKey: 'md' })}
    font-weight: 900;
    width: 100%;
    height: fit-content;
    text-align: start;
    border-bottom: 1px solid;
    color: ${({ theme }) => theme.colors.text.text};
    
    @media (min-width: 550px) {
      ${font({ fontKey: 'secondary', sizeKey: 'md' })}
      font-weight: 300;
    }
  }
`
