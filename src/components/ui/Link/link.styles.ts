'use client'

import styled from "styled-components";
import Link from "next/link";
import { flex, textLink } from "@/styles/mixins";
import { title } from "process";

export const SLink = styled(Link)`
      ${flex({align:'center'})}
      width: 100%;
      height: fit-content;
    
      span {
        ${flex({justfy: 'center', align: 'center'})}
        gap: ${({ theme }) => theme.spaces.small};
        padding: ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.medium};
        height: 100%;
        width: fit-content;
        border-radius: ${({ theme }) => theme.spaces.medium};
        background-color: ${({ theme }) => theme.colors.btn};
        transition: all 0.3s ease-in-out;
        color: ${({theme}) => theme.colors.textAccent};
        padding: ${({ theme }) => theme.spaces.medium};
        font-size: ${({theme}) => theme.fontSize.small};
        ${textLink};

        
        &:hover {
          background-color: ${({ theme }) => theme.colors.primaryHover};
        }
      }
`