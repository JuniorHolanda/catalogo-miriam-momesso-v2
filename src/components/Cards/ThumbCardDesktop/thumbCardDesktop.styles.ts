'use client'

import { borderRadius, flex } from '@/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

export const SWrapper = styled(Link)`
  ${flex({})};
  ${borderRadius({ radiusKey: 'md' })};
  height: 200px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  img {
    &:hover {
      scale: 110%;
    }
  }
`
