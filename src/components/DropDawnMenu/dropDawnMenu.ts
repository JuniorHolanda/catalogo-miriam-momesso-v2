'use client'
import { borderRadius, flex, gap, padding } from '@/styles/mixins'
import Link from 'next/link'
import styled from 'styled-components'

export const SWrapper = styled.section`
  ${flex({ direction: 'column', justfy: 'start' })};
  ${gap({ spaceKey: 'md' })};
  ${padding({ spaceKey: 'md' })};
  width: 100%;
  height: 100%;
  overflow: scroll;

  @media (min-width: 550px) {
    ${flex({ direction: 'row', align: 'start' })}
    ${padding({ spaceKey: 'xlg' })};
    position: absolute;
    top: 10vh;
    left: 0;
    overflow: visible;
    background-color: ${({ theme }) => theme.colors.opacity.base};
    backdrop-filter: blur(30px);
    width: 100%;
    height: 50vh;
  }
`

export const SNav = styled.nav`
  ${flex({ direction: 'column', align: 'start', justfy: 'start' })}
  ${gap({ spaceKey: 'sm' })};
  color: ${({ theme }) => theme.colors.text};
  height: 100%;

  @media (min-width: 550px) {
    width: 30%;
    height: 100%;
    ${gap({ spaceKey: 'sm' })};
    ${flex({ direction: 'column', align: 'start', justfy: 'start' })}
    color: ${({ theme }) => theme.colors.text};
  }
`

export const SContainerListCat = styled.div`
  ${flex({})}
  width: 100%;
  height: 100%;

  ul {
    display: grid;
    grid-template: auto / 1fr 1fr 1fr;
    ${gap({ spaceKey: 'sm' })}
    flex-wrap: wrap-reverse;
    width: 100%;
    height: 100%;

    li {
      ${flex({ direction: 'column', align: 'start', justfy: 'start' })}
      ${borderRadius({ radiusKey: 'sm' })}
      color: ${({ theme }) => theme.colors.text.text};
      overflow: hidden;
      
      @media (min-width: 550px) {
          width: 100%;
          height: 50px;
      }
    }
  }
`
export const SLink = styled(Link)`
  ${flex({ align: 'center', justfy: 'start' })};
  ${gap({ spaceKey: 'sm' })};
  height: 100%;
`
export const SContainerThumb = styled.div`
    height: 40px;
    width: 40px;
    overflow: hidden;
    border-radius: 300px;

    span {
      width: 100%;
    }
`;

export const SContainerTitleCat = styled.div`
  display: block;
  width: 100%;
  h2 {
    ${padding({ spaceKey: 'md' })};
    width: 100%;
    height: fit-content;
    text-align: start;
    border-bottom: 2px solid;
    color: ${({ theme }) => theme.colors.text.text};
  }
`
