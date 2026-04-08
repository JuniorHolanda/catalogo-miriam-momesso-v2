'use client'

import { borderRadius, flex, font, padding } from "@/styles/mixins";
import Link from "next/link";
import styled from "styled-components"

export const ScontainerInput = styled.form`
  ${flex({})};
  width: 50%;
  height: 7%;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

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
    ${flex({})};
    ${padding({ spaceKey: 'md' })};
    ${borderRadius({ radiusKey: 'md' })};
    ${font({ fontKey: 'secondary', sizeKey: 'xsm' })};
    overflow: hidden;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background.base};

    &:focus {
      outline: none;
      border: solid 1px ${({ theme }) => theme.colors.border.active};
    }
  }
`;

export const SLink = styled(Link)`

`;