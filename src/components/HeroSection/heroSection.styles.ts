"use client";

import styled from "styled-components";
import { borderRadius, flex, padding } from "@/styles/mixins";

type SsectionProps = {
  $viewPortStyle: "sm" | "md" | "lg" | "xl" | null;
};

export const Ssection = styled.section<SsectionProps>`
  position: relative;
  z-index: 0;
  ${flex({ align: "center", justfy: "start" })}
  ${padding({ spaceKey: "md" })}
  width: 100%;
  height: 90dvh;
  overflow: hidden;
`;
