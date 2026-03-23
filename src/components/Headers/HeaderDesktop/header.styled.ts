'use client';

import { flex, font, gap, padding, smoothTransition } from '@/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

export const Scontainer = styled.header`
  ${flex({ align: 'center', justfy:'space-between'})}
  ${padding({spaceKey: 'sm'})}
  ${gap({spaceKey: 'sm'})}
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.pallet.primary};
  z-index: 1;
  border-bottom: 1px solid ${({ theme }) => theme.colors.opacity.base};
`;
export const ScontainerLogo = styled(Link)`
  ${flex({align:'center', justfy:'start'})}
  ${padding({spaceKey:'sm'})}
  flex: 0.5;
  height: 100%;


  img {
    object-fit: contain;
    height: 100%;
    width: auto;
  }
`;
