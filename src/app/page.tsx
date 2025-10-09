'use client';

import styled from "styled-components";

const Scontainer = styled.div`
  padding: 20px;
  background-color: ${({ theme}) => theme.colors.background};
`;

export default function Home() {




  return (
    <Scontainer>
      <h1>Hellow World!</h1>
    </Scontainer>
  );
}