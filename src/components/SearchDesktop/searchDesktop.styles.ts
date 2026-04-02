"use client";

import styled from "styled-components";
import { borderRadius, flex, font, gap, padding } from "@/styles/mixins";
import Link from "next/link";

type SsectionProps = {
  $viewPortStyle: "sm" | "md" | "lg" | "xl" | null;
};

export const Ssection = styled.section<SsectionProps>`
  position: relative;
  z-index: 0;
  ${flex({ align: "center", justfy: "start" })}
  ${padding({ spaceKey: "md" })}
  width: 100%;
  height: ${({ $viewPortStyle }) =>
    $viewPortStyle === "lg" || $viewPortStyle === "xl" ? "90dvh" : "100dvh"};
  overflow: hidden;
  background-image: g;
`;

export const ScontainerCardProduct = styled.ul`
  position: absolute;
  top: 110%;
  left: 50%;
  ${flex({})}
  ${padding({ spaceKey: "md" })}
  ${borderRadius({ radiusKey: "md" })}
  width: 90vw;
  height: 50vh;
  transform: translateX(-50%);

  .swiper-container {
    ${borderRadius({ radiusKey: "sm" })}
    padding: 0 50px;
    height: 100%;
  }

  .swiper-itens {
    height: 100%;
  }
`;

type SformInSectionProps = {
  $props: boolean;
  $viewPortStyle: "sm" | "md" | "lg" | "xl" | null;
};

export const SformInSection = styled.form<SformInSectionProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${(props) => (props.$props === true ? "15%" : "50%")};
  left: 50%;
  ${flex({ direction: "column" })};
  ${padding({ spaceKey: "md" })}
  ${gap({ spaceKey: "md" })} 
  flex: 0.5;
  height: fit-content;
  z-index: 100;
  transition: all ease-in-out 0.1s;
  width: 90vw;
`;

export const Stitle = styled.h1`
  ${font({ fontKey: "primary", sizeKey: "lg" })}
  color: ${({ theme }) => theme.colors.title.primary};
  font-weight: 100;
`;

export const ScontainerInput = styled.div<SsectionProps>`
  ${flex({})};
  width: 50%;
  height: 80px;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  input {
    ${flex({})};
    ${padding({ spaceKey: "md" })};
    ${borderRadius({ radiusKey: "md" })};
    ${font({ fontKey: "secondary", sizeKey: "xsm" })};
    overflow: hidden;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background.base};

    &:focus {
      outline: none;
      border: solid 1px ${({ theme }) => theme.colors.border.active};
    }
  }
`;

export const SContainerHoliday = styled.div`
  ${flex({})}
  ${gap({ spaceKey: "md" })}
  width: 100%;
  height: 300px;

  .swiper-wrapper {
    transition-timing-function: linear !important;
    height: 100%;
  }

  .swiper-container-holiday {
    ${flex({})}
    width: 100%;
    height: 100%;

    .swiper-item-holiday {
      ${flex({})}
      width: 100%;
      height: 100%;
    }
  }
`;

export const SLink = styled(Link)`
  ${flex({ direction: "column" })}
  ${gap({ spaceKey: "sm" })}
  ${padding({ spaceKey: "lg" })}
  ${borderRadius({ radiusKey: "md" })}
  ${font({ fontKey: "secondary", sizeKey: "sm" })}
  width: 300px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.high};
  color: ${({ theme }) => theme.colors.text.text};

  img {
    overflow: hidden;
    ${borderRadius({ radiusKey: "sm" })}
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

export const SContainerInfoHoliday = styled.div`
  ${flex({ direction: "column", justfy: "center", align: "center" })}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;

  h2 {
    ${font({ fontKey: "secondary", sizeKey: "xsm" })}
    font-weight: 900;
  }
`;

export const SContainerStories = styled.div`
  ${flex({})}
  height: 50vh;
  border: solid #327896;
  overflow: hidden;
`;
