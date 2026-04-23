'use  client'

import { flex, font, gap, padding, smoothTransition } from '@/styles/mixins'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'

export const Snav = styled.nav`
  ${flex({})}
  flex: 1;
  height: 100%;
`

export const SList = styled.ul`
  ${flex({})}
  ${gap({ spaceKey: 'md' })} 
  ${font({ sizeKey: 'sm', fontKey: 'secondary' })}
  height: 100%;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.link.reverse};
`

export const SItemMenu = styled.li`
  ${flex({})}
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
  ${padding({ spaceKey: 'md' })}
  ${smoothTransition}
  font-weight: 400;
  cursor: pointer;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.text.reverseText};
  z-index: 1000;
  height: 100%;


  button {
    color: ${({ theme }) => theme.colors.text.reverseText};
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    font-weight: 400;

    &:hover {
      font-weight: 600;
    }
  }
`

export const SLink = styled(Link)``

export const SContainerMenu = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 90vh;
  top: 10vh;
  left: 0;
  background-color: ${({ theme }) => theme.colors.opacity.base};
  backdrop-filter: blur(30px);
`
