import { flex, font, gap, padding } from '@/styles/mixins'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SWrapper = styled.main`
  ${flex({ direction: 'column', justfy: 'start' })}
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none; //Firefox
  -ms-overflow-style: none; // IE / Edge antigo

  @media (min-width: 550px) {
    ${padding({ spaceKey: 'xlg' })};
    ${gap({ spaceKey: 'xlg' })};
  }
`
export const STitleContainer = styled.div`
  ${flex({})}
  ${font({ fontKey: 'secondary', sizeKey: 'md' })}
  ${padding({ spaceKey: 'sm' })};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.title.primary};
  height: fit-content;

  @media (min-width: 500px) {
    ${font({ fontKey: 'secondary', sizeKey: 'lg' })}
  }
`

export const SMotionContainerCards = styled.div`
  ${flex({ direction: 'column', justfy: 'start', align: 'start' })};
  ${gap({ spaceKey: 'sm' })};
  ${padding({ spaceKey: 'sm' })};
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  @media (min-width: 550px) {
    display: grid;
    grid-template: auto / repeat(8, 1fr);
    ${gap({ spaceKey: 'lg' })};
    ${padding({ spaceKey: 'lg' })};
    height: auto;
  }
`

export const SMotionCard = styled(motion.section)`
  ${flex({ direction: 'column', justfy: 'start', align: 'start' })};
  width: 100%;

  @media (min-width: 550px) {
    
    height: 100%;
  }
`
