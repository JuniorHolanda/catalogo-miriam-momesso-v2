'use client';
import styled, { css } from 'styled-components';
import Link from 'next/link';

interface PropsScontainerImg {
  $expand: number;
}

export const Scard = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 400px;
  max-width: 542px;

  height: 500px;
  gap: ${({ theme }) => theme.spaces.small};
  padding: ${({ theme }) => theme.spaces.small};
  border-radius: ${({ theme }) => theme.spaces.medium};
  overflow: hidden;
  background: ${({ theme }) => `${theme.transparence.primary}`};
  backdrop-filter: blur(10px);
`;

export const ScontainerSlider = styled.section`
  display: flex;
  flex-direction: row;
  height: 60%;
  gap: ${({ theme }) => theme.spaces.small};
  padding: ${({ theme }) => theme.spaces.small};
  border-radius: ${({ theme }) => theme.spaces.medium};
  overflow: hidden;
`;

export const ScontainerImg = styled.div<{ $expand: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${({ $expand }) => $expand};
  height: 100%;
  min-width: 100px;
  border-radius: ${({ theme }) => theme.spaces.medium};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  background-color: #f3f3f3ff;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;
  }
`;

export const Scontent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: ${({ theme }) => theme.spaces.small};
  padding: ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.medium};
  width: 100%;
  height: 40%;
  overflow: hidden;
  z-index: 1;
  border-radius: ${({ theme }) => theme.spaces.medium};

  h1 {
    font-weight: 100;
    font-style: italic;
    letter-spacing: 5px;
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
  }
`;

type StextureProps = {
  rotateTexture: number;
};

export const SbuttonProduct = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spaces.small};
    padding: ${({ theme }) => theme.spaces.small} ${({ theme }) => theme.spaces.medium};
    height: 100%;
    width: fit-content;
    border-radius: ${({ theme }) => theme.spaces.medium};
    background-color: ${({ theme }) => theme.colors.btn};
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.btnHover};
    }
  }
`;


export const SSgal = styled.div`
  background-color: red;
  z-index: 4;
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Sdialog = styled.dialog`
  transform: translate(-50%, -50%);  
  top: 50%;
  left: 50%;
  border-radius: ${({ theme }) => theme.spaces.medium};
  padding: 16px;
  width: 90%;
  height: 90%;
  background: #ffffffd0;
  outline: none;
  border: none;
  overflow: hidden;


  &::backdrop {
    backdrop-filter: blur(10px);
  }
`;

export const SwrapperBtnClose = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 10%;

  button {
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    height: auto;
    width: fit-content;
    padding: ${({ theme }) => theme.spaces.small};
    outline: none;
  }
`;

export const Ssection = styled.section`
    display: flex;
    width: 100%;
    height:80%;
    overflow: hidden;

    div{
      display: flex;
      gap: 10px;
      overflow: hidden;
      height: 100%;
      width: 100%;
      padding: 30px;
      background-color: transparent;

      img{
          object-fit: cover;
          object-position: center;
          width: 100%;
          height: 100%;
          border-radius: 30px;
      }
    }
`