'use client';

import { boxShadow, flexCenter, flexStart } from '@/styles/mixins';
import Link from 'next/link';
import styled from 'styled-components';

export const Sform = styled.form`
  ${flexCenter};
  position: relative;
  flex-direction: column;
  flex: 0.5;
  height: 100%;
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

    &::placeholder {
      padding: ${({ theme }) => theme.spaces.small};
      color: ${({ theme }) => theme.colors.textMuted};
      font-family: ${({ theme }) => theme.fonts.commonFont};
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }
`;

export const Sul = styled.ul`
  ${flexStart};
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.small};
  padding: ${({ theme }) => theme.spaces.small};

  position: absolute;
  top: 110%;
  left: 0;
  max-height: 70dvh;
  height: fit-content;
  width: 100%;

  background: ${({ theme }) => theme.gradient.primary};
  backdrop-filter: blur(15px);
  border-radius: ${({ theme }) => theme.borderRadios.large};
  overflow: auto;
  scrollbar-width: none;

  li {
    ${flexCenter}
    padding: ${({ theme }) => theme.spaces.medium};
    background: ${({ theme }) => theme.gradient.secondary};
    border-radius: ${({ theme }) => theme.borderRadios.large};
    overflow: hidden;
    backdrop-filter: blur(15px);
    height: 170px;
    flex-shrink: 0;
  }
`;

export const Slink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: ${({ theme }) => theme.borderRadios.medium};
    width: 100%;
    height: 100%;
  }

  .imgContainer {
    ${flexCenter}
    border-radius: ${({ theme }) => theme.borderRadios.medium};
    overflow: hidden;
    width: 100%;
    height: 100%;

    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
`;
