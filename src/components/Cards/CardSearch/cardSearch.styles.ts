import { boxShadow, flexCenter } from "@/styles/mixins";
import Link from "next/link";
import styled from "styled-components";

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