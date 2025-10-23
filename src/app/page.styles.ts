'use client';

import styled from "styled-components";

export const Scontainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundBase};
  display: flex;

  h1 {
    font-family: ${({ theme }) => theme.fonts.titleFont};
    font-size: 5rem;
  }
`;