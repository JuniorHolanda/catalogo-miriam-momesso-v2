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
  border: solid rgb(0, 59, 236);

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
  border: solid rgb(162, 0, 255);

  @media (min-width: 550px) {
    border: solid rgb(255, 251, 0);
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
    ${flex({ align: 'start', justfy: 'start' })}
    ${gap({ spaceKey: 'sm' })}
    flex-wrap: wrap-reverse;
    width: 100%;
    height: 100%;
    border: solid #730;

    li {
      ${flex({ direction: 'column', align: 'center', justfy: 'space-between' })}
      ${borderRadius({ radiusKey: 'sm' })}
      color: ${({ theme }) => theme.colors.text.text};
      overflow: hidden;
      
      @media (min-width: 550px) {
          width: calc(33.3% - 5px);
          height: 50px;
      }
    }
  }
`
export const SLink = styled(Link)`
  ${flex({ align: 'center', justfy: 'start' })};
  ${gap({ spaceKey: 'sm' })};
  ${padding({ spaceKey: 'sm' })};
  height: 100%;
  border: solid #785;
`
export const SContainerThumb = styled.div`
    height: 100%;
    border: solid #781;
    width: 40%;
    overflow: hidden;

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
