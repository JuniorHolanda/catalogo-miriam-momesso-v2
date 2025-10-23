import { boxShadow, flexCenter, flexStart } from "@/styles/mixins";
import Link from "next/link";
import styled from "styled-components";

export const Sform = styled.form`
  ${flexCenter};
  position: relative;
  flex-direction: column;
  flex: 0.5;
  height: 100%;
`;

export const ScontainerInput = styled.div`
  ${flexCenter};
  width: 100%;
  height: 100%;
  
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
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.borderRadios.large};
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => theme.spaces.medium};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.commonFont};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  `;

export const Sul = styled.ul`
  ${flexStart};
  ${boxShadow}
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces.medium};
  padding: ${({ theme }) => theme.spaces.medium};

  position: absolute;
  z-index: 10000;
  top: 110%;
  left: 0;
  
  max-height: 70dvh;
  height: fit-content;
  width: 100%;

  border-radius: ${({ theme }) => theme.borderRadios.large};
  overflow: auto;
  scrollbar-width: none;
  background: ${({ theme }) => theme.gradient.secondary};
  backdrop-filter: blur(60px);
  
  
  li {
    background: ${({ theme }) => theme.gradient.primary};
    ${flexCenter}
    ${boxShadow}

    padding: ${({ theme }) => theme.spaces.medium};
    border-radius: ${({ theme }) => theme.borderRadios.large};
    height: fit-content;
    flex-shrink: 0;
    z-index: 1;
  }

`;

export const Slink = styled(Link)`
  display: grid;
  grid-template: auto 1fr / 1fr 1fr;
  gap: ${({ theme }) => theme.spaces.small};
  width: 100%;
  height: 100%;
`;

export const ScontainerCategory = styled.div`
  grid-area: 1/1/2/3;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spaces.small};
  width: 100%;
  height: 100%;

  span {
    background-color: ${({ theme }) => `${theme.colors.backgroundAccent}50`};
    padding: ${({ theme }) => theme.spaces.small};
    border-radius: ${({ theme }) => theme.borderRadios.small};
    font-family: ${({ theme }) => theme.fonts.commonFont};
  }
`;

export const ScontainerText = styled.div`
  grid-area: 2/1/3/2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.borderRadios.medium};
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};

  h3 {
    font-family: ${({ theme }) => theme.fonts.commonFont};
    font-weight: 600;
    font-style: italic;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.commonFont};
  }
`;

export const ScontainerImg = styled.div`
${flexCenter}
  border-radius: ${({ theme }) => theme.borderRadios.medium};
  gap: ${({ theme }) => theme.spaces.small};
  width: 100%;
  height: 100%;

  div {
    ${flexCenter}
    width: 50%;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadios.medium};

    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
`;



