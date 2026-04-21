'use client';

import { flex, font, gap, padding } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.main`
  ${flex({ direction: 'column', justfy: 'start' })};
  ${padding({ spaceKey: 'sm' })};
  ${gap({ spaceKey: 'md' })};
  background-color: ${({ theme }) => theme.colors.background.base};
  width: 100%;
  height: 80dvh;
  margin-top: 10dvh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.background.base};
  
  @media (min-width: 550px) {
    ${padding({ spaceKey: 'xlg' })};
    ${gap({ spaceKey: 'xlg' })};
  }
  `;

export const SContainerTitle = styled.div`
  ${flex({ direction: 'column' })};
  color: ${({ theme }) => theme.colors.title.primary};
  
  h1 {
    ${font({ fontKey: 'primary', sizeKey: 'xlg' })};
    font-weight: 100;
    text-transform: capitalize;
    
  }
  
  p {
    ${font({ fontKey: 'secondary', sizeKey: 'md' })};
    font-weight: 100;
  }
  `;

export const SSection = styled.section`
  ${flex({ justfy: 'start', align: 'start' })};
  ${gap({ spaceKey: 'md' })};
  flex-wrap: wrap;
  width: 100%;
  `;

export const SContainerProduct = styled.div`
  ${flex({})}
  flex: 0 0 100%;
  width: 100%;
  
  @media (min-width: 606px) {
      flex: 0 0 calc(50% - 8px);
    }
    
    @media (min-width: 900px) {
      flex: 0 0 calc(33.33% - 10px);
  }
`;
