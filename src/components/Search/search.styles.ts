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
  gap: ${({ theme }) => theme.spaces.medium};
  padding: ${({ theme }) => theme.spaces.medium};

  position: absolute;
  top: 110%;
  left: 0;
  max-height: 70dvh;
  height: fit-content;
  width: 100%;

  backdrop-filter: blur(5px);
  border-radius: ${({ theme }) => theme.borderRadios.large};
  overflow: auto;
  scrollbar-width: none;
  ${boxShadow}
  background: ${({ theme }) => theme.gradient.secondary};

  li {
    background: ${({ theme }) => theme.gradient.primary};
    ${flexCenter}
    padding: ${({ theme }) => theme.spaces.medium};
    border-radius: ${({ theme }) => theme.borderRadios.large};
    overflow: hidden;
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

    h3 {
      font-family: ${({ theme }) => theme.fonts.commonFont};
      font-weight: 400;
      font-style: italic;
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    gap: ${({ theme }) => theme.spaces.small};

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${({ theme }) => theme.spaces.small};
      width: 100%;
      height: fit-content;
      color: #00000017;
      background-color: ${({ theme }) => `${theme.colors.backgroundSurface}10`};
      border-radius: ${({ theme }) => theme.borderRadios.medium};
      backdrop-filter: blur(25);
      border: 1px solid #00000017;

      h3 {
        width: 100%;
        height: fit-content;
        text-align: end;
        font-family: ${({ theme }) => theme.fonts.commonFont};
        font-size: ${({ theme }) => theme.fontSize.small};
        font-weight: 100;
        font-style: italic;
      }
    }

    .images {
      ${flexCenter}
      border-radius: ${({ theme }) => theme.borderRadios.medium};
      gap: ${({ theme }) => theme.spaces.medium};
      width: 100%;
      height: 100%;

      div {
        ${flexCenter}
        width: 50%;
        overflow: hidden;
        border-radius: ${({ theme }) => theme.borderRadios.medium};

        img {
          object-fit: cover;
          object-position: center;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
`;
