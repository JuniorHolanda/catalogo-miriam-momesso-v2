'use client';

import { flex, gap } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.div`
  grid-area: smainImg;
  ${flex({ direction: 'column' })};
  ${gap({ spaceKey: 'md' })}
  width: 100%;

  @media (min-width: 550px) {
    flex-direction: row;
    height: 70vh;
  }
`;

export const SGallery = styled.div`
  ${flex({})};
  ${gap({ spaceKey: 'md' })};
  grid-area: sgallery;
  width: 100%;
  height: 100%;

  @media (min-width: 550px) {
    ${flex({})};
    width: 100%;
    flex-wrap: wrap;
  }

  div {
    ${flex({})};
    height: 100%;
    width: 100%;
    border-radius: 300px;
    overflow: hidden;

    @media (min-width: 550px) {
        width: calc(50% - ${({ theme }) => theme.spaces.md});
        height: calc(50% - ${({ theme }) => theme.spaces.md});
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 30px;
    }
  }
`;

export const SMainImg = styled.div`
  grid-area: smainImg;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;
