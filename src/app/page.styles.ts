'use client';

import { flex } from "@/styles/mixins";
import styled from "styled-components";

export const Scontainer = styled.div`
  ${flex({})}
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundBase};
  display: flex;

  h1 {
    font-family: ${({ theme }) => theme.fonts.titleFont};
    font-size: 5rem;
  }
`;