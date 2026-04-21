'use client';

import { flex } from "@/styles/mixins";
import styled from "styled-components";

export const Scontainer = styled.div`
  ${flex({})}
  flex-direction: column;
  display: flex;
  height: 80dvh;
  margin-top: 10dvh;
`;