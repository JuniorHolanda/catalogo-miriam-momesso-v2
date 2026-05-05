import { flex, gap, padding } from '@/styles/mixins'
import styled from 'styled-components'

export const SWrapper = styled.main`
  ${flex({ justfy: 'start', align: 'start' })};
  ${gap({ spaceKey: 'md' })};
  flex-wrap: wrap;
  width: 100%;
  overflow: scroll;
  
  @media (min-width: 500px) {
    ${flex({ direction: 'row', justfy: 'start' })}
    ${padding({ spaceKey: 'xlg' })};
    ${gap({ spaceKey: 'xlg' })};
    margin-top: 0;
    height: fit-content;
    overflow: visible;
  }
  `
export const STitle =  styled.div`
${flex({})}
`;

export const SSection =  styled.section`
  ${flex({ direction: 'column', justfy: 'start', align: 'start' })};
`;