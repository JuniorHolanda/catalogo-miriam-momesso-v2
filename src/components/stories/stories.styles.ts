import { borderRadius, flex } from "@/styles/mixins";
import styled from "styled-components";

export const SContainerStories = styled.div`
  ${flex({})}
  height: 100%;
  overflow: hidden;
${(borderRadius({radiusKey: "md"}))}

`;