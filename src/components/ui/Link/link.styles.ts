'use client'

import styled from "styled-components";
import Link from "next/link";
import { flex, gap, padding, } from "@/styles/mixins";

export const SLink = styled(Link)`
      ${flex({align:'center'})}
      width: 100%;
      height: fit-content;
    
      span {
        ${flex({justfy: 'center', align: 'center'})}
        ${gap({spaceKey:'sm'})}
        ${padding({spaceKey:'sm'})}
        height: 100%;
        width: fit-content;
        transition: all 0.3s ease-in-out;
  ${padding({spaceKey: 'md'})}
        
        &:hover {
        }
      }
`