'use client';

import { flex } from "@/styles/mixins";
import { motion } from "framer-motion";
import styled from "styled-components";


export const SWrapper = styled(motion.div)`
  ${flex({})};
  height: 100%;
`;