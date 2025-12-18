'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { flexCenter } from '@/styles/mixins';

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
  margin-top: calc(10vh + ${({ theme }) => theme.spaces.xLarge});
  padding: ${({ theme }) => theme.spaces.xLarge};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: calc(85vh - ${({ theme }) => theme.spaces.xLarge});
  overflow: hidden;
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

export const SformInHeader = styled.form`
  ${flexCenter};
  flex-direction: column;
  flex: 0.5;
  height: 100%;
  width: 100%;
  max-height: 100px;
  z-index: 100;
`;

type SformInSectionProps = {
  $props: boolean;
};

export const SformInSection = styled.form<SformInSectionProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${(props) => (props.$props === true ? '15%' : '50%')};
  left: 50%;
  ${flexCenter};
  flex-direction: column;
  flex: 0.5;
  height: 100%;
  width: 50%;
  max-height: 100px;
  z-index: 100;
  transition: all ease-in-out 0.1s;
`;

export const ScontainerInput = styled.div`
  ${flexCenter};
  width: 100%;
  height: 100%;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadios.large};
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => theme.spaces.medium};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.commonFont};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const ScontainerCardProduct = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  transform: translateX(-50%);
  top: 130%;
  left: 50%;
  width: 90vw;
  border-radius: 30px;

  .swiper-container {
    padding: 0 50px;
  }

  .swiper-button-prev {
  }
`;
