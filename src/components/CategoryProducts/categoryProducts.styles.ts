'use client'

import { flex, gap } from '@/styles/mixins'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SWrapper = styled.div`
  ${flex({ direction: 'column' })};
  ${gap({ spaceKey: 'md' })};
  width: 100%;
  align-items: stretch;

  @media (min-width: 550px) {
    ${flex({ direction: 'row' })};
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`

export const SMotion = styled(motion.div)`
  ${flex({})};
  height: 100%;
`
