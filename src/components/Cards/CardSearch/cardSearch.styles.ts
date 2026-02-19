import { borderRadius, flex, font, gap, padding } from "@/styles/mixins";
import Link from "next/link";
import styled from "styled-components";

export const Slink = styled(Link)`
  display: grid;
  grid-template: auto 1fr / 1fr 1fr;
  ${gap({spaceKey: 'md'})}
  width: 100%;
  height: 100%;
`;

export const ScontainerCategory = styled.div`

  grid-area: 1/1/2/3;
  display: flex;
  justify-content: flex-end;
  ${gap({spaceKey: 'md'})}
  width: 100%;
  height: 100%;

  span {
    background-color: ${({theme}) => theme.colors.background.high};
    ${padding({spaceKey: 'md'})}
    ${borderRadius({radiusKey:'sm'})}
    ${font({fontKey: 'secondary', sizeKey:'sm'})}
}
`;

export const ScontainerText = styled.div`
  grid-area: 2/1/3/2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(borderRadius({radiusKey:'md'}))}
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
  ${flex({})};
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
    ${(borderRadius({radiusKey:'md'}))}
    overflow: hidden;
    width: 100%;
    height: 100%;
  ${padding({spaceKey: 'md'})}
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.commonFont};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

  export const ScontainerImg = styled.div`
${flex({})}
    ${(borderRadius({radiusKey:'md'}))}
  ${gap({spaceKey: 'md'})} 
  width: 100%;
  height: 100%;

  div {
    ${flex({})}
    width: 50%;
    overflow: hidden;
    ${(borderRadius({radiusKey:'md'}))}

    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
`;