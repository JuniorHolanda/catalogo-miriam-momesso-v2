import { boxShadow, flex, flexCenter } from '@/styles/mixins';
import styled from 'styled-components';

export const SformInHeader = styled.form`
  ${flexCenter};
  flex-direction: column;
  flex: 0.5;
  height: 100%;
  width: 100%;
  max-height: 100px;
  z-index: 100;
`;

type SformInSectionProps = {
  $props: boolean;
};

export const SformInSection = styled.form<SformInSectionProps>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${(props) => (props.$props === true ? '15%' : '50%')};
  left: 50%;
  ${flexCenter};
  flex-direction: column;
  flex: 0.5;
  height: 100%;
  width: 50%;
  max-height: 100px;
  z-index: 100;
  transition: all ease-in-out 0.1s;
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

export const ScontainerCardProduct = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  transform: translateX(-50%);
  top: 130%;
  left: 50%;
  width: 90vw;
  border-radius: 30px;

  .swiper-container {
    padding: 0 50px;
  }

  .swiper-button-prev {
  }
`;
