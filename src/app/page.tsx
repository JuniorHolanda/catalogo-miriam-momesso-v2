'use client';

import styled from "styled-components";

const Scontainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundBase};
  display: flex;

  h1 {
    font-family: ${({ theme }) => theme.fonts.titleFont};
    font-size: 50rem;
  }
`;

export default function Home() {

  return (
    <Scontainer>
      <h1>Hellow World!</h1>
    </Scontainer>
  );
}