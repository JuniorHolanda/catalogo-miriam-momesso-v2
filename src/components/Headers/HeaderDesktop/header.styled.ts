'use client';

import { flex, font, gap, padding, smoothTransition } from '@/styles/mixins';
import styled from 'styled-components';

export const Scontainer = styled.header`
  ${flex({ align: 'center', justfy:'space-between'})}
  ${padding({spaceKey: 'sm'})}
  ${gap({spaceKey: 'sm'})}

  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.pallet.primary};
  z-index: 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.opacity.base};
`;
export const ScontainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex: 0.5;
  height: 100%;

  img {
    object-fit: contain;
    height: 100%;
    width: auto;
  }
`;
export const Snav = styled.div`
  ${flex({})}
  ${gap({spaceKey: 'md'})} 
  flex: 1;
  height: 100%;
  ${font({sizeKey: 'sm', fontKey: 'secondary'})}
  font-weight: 800;
  color: ${({ theme }) => theme.colors.link.reverse};

  li {
    ${flex({})}
    ${smoothTransition}
    ${padding({spaceKey: 'sm'})}
    cursor: pointer;
    white-space: nowrap;
  }
`;
