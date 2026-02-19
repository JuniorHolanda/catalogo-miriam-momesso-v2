'use client';

import { flex } from "@/styles/mixins";
import styled from "styled-components";

export const Scontainer = styled.div`
  ${flex({})}
  flex-direction: column;
  display: flex;

  h1 {
    font-size: 5rem;
  }
`;