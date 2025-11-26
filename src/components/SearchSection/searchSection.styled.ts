'use client';

import Link from "next/link";
import styled from "styled-components";

export const Slink = styled(Link)`
  display: grid;
  grid-template: auto 1fr / 1fr 1fr;
  gap: ${({ theme }) => theme.spaces.small};
  width: 100%;
  height: 100%;
`;

export const ScontainerCategory = styled.div`
  grid-area: 1/1/2/3;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spaces.small};
  width: 100%;
  height: 100%;

  span {
    background-color: ${({ theme }) => `${theme.colors.backgroundAccent}50`};
    padding: ${({ theme }) => theme.spaces.small};
    border-radius: ${({ theme }) => theme.borderRadios.small};
    font-family: ${({ theme }) => theme.fonts.commonFont};
  }
`;

export const Ssection = styled.section`
  position: relative;
  z-index: 0;
  margin-top: calc(10vh + ${({theme}) => theme.spaces.xLarge});
  padding: ${({ theme }) => theme.spaces.xLarge};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: calc(85vh - ${({theme}) => theme.spaces.xLarge});
  overflow: auto;
  border-radius: ${({ theme }) => theme.borderRadios.Xlarge};
  background-color: ${({ theme }) => theme.colors.backgroundAccent};
`;

export const SbrutalSymbol = styled.span`
  position: absolute;
  top: -50%;
  left: -20%;
  z-index: 20;
  width: clamp(400px, 60em, 50vw);
  transform: rotate(27deg);
  
  img {
      width: 100%;
  }
`;