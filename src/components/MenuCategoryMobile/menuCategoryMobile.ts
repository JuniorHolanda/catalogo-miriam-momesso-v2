import { flex, padding } from "@/styles/mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const SWrapper = styled.div`
  ${flex({})}
  height: 100%;
  font-size: clamp(1rem, 6rem, 8vw);

`;

export const SContainerMenu = styled(motion.nav)`
  ${flex({direction:'column'})};
  position: fixed;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 81dvh;
  background-color: ${({theme}) => theme.colors.opacity.base};
  backdrop-filter: blur(50px);
`;

export const SContent = styled.button`
  ${flex({})}
  height: 100%;
  width: 100%;
  `;
export const SContainerBtnHiddenMenu = styled.button`
  ${flex({justfy:'end'})}
  ${padding({spaceKey:'md'})}
  width: 100%;
  height: fit-content;
  
  button {
    font-size: clamp(1rem, 6rem, 8vw);
  }

`;
