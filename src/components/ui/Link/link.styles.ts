'use client'

import styled from "styled-components";
import Link from "next/link";
import { borderRadius, flex, font, gap, padding, } from "@/styles/mixins";

export const SLink = styled(Link)`
      ${flex({align:'center'})};
      ${borderRadius({radiusKey:'sm'})}
      ${padding({spaceKey:'sm'})}
      width: fit-content;
      height: fit-content;
      background-color: ${({ theme }) => theme.colors.pallet.secondary};
      color: ${({ theme }) => theme.colors.text.reverseText};
      transition: all ease-in-out .2s;
      
      &:hover {
            background-color: ${({ theme }) => theme.colors.pallet.primary};
      }
    
      span {
            ${flex({justfy: 'center', align: 'center'})};
            ${gap({spaceKey:'sm'})};
            ${padding({spaceKey:'sm'})};
            ${font({fontKey:'secondary', sizeKey:'sm'})};
            height: 100%;
            width: fit-content;
            transition: all 0.2s ease-in-out;
      }
`