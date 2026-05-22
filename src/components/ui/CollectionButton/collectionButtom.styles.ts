'use client';

import { entraceToBottomCollection } from '@/styles/animations';
import { borderRadius, flex, font, gap, padding } from '@/styles/mixins';
import styled from 'styled-components';
import CustomButton from '../Button';

export const SWrapper = styled.button`
  ${flex({})};
  ${padding({ spaceKey: 'sm' })};
  ${borderRadius({ radiusKey: 'sm' })};
  ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.button.default};
  color: ${({ theme }) => theme.colors.text.reverseText};
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.button.active};
    transform: scale(0.98);
    background: darkerblue;
  }

  @media (min-width: 500px) {
    width: fit-content;
    ${padding({ spaceKey: 'md' })};
    ${gap({ spaceKey: 'md' })};
  }

  span {
    display: none;

    @media (min-width: 550px) {
      display: block;
    }
  }
`

export const SContainerCollection = styled.div`
  ${flex({ direction: 'column', justfy: 'start' })};
  ${padding({ spaceKey: 'md' })};
  ${gap({ spaceKey: 'md' })};
  ${font({ fontKey: 'secondary', sizeKey: 'md' })};
  color: ${({ theme }) => theme.colors.text.text};
  font-weight: 600;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.high};
  opacity: 0;
  animation: ${entraceToBottomCollection} ease-in-out 0.3s forwards;
  overflow-y: scroll;

  h1 {
    display: flex;
    width: 100%;
    height: 100%;
  }
`

export const SContainerBtnCategory = styled.div`
  ${flex({})};
  ${gap({ spaceKey: 'md' })};
  width: 100%;
`

export const SButtonCategory = styled.div`
  ${padding({ spaceKey: 'sm' })};
  ${flex({})};
  ${borderRadius({ radiusKey: 'md' })};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.surface};
  color: ${({ theme }) => theme.colors.text.text};
`
type PropsSBtnCategory = {
  $iconRemove: boolean
}

export const SBtnCategory = styled(CustomButton)<PropsSBtnCategory>`
  ${flex({})};
  ${padding({ spaceKey: 'sm' })};
  padding: ${({ theme }) => theme.spaces.sm} ${({ theme }) => theme.spaces.md};
  height: 100%;
  width: fit-content;
  color: ${({ theme }) => theme.colors.background.surface};
  background-color: ${({ $iconRemove, theme }) =>
    $iconRemove ? theme.colors.feedback.error : theme.colors.button.default};
  ${borderRadius({ radiusKey: 'md' })};
  font-size: ${({ theme }) => theme.iconSize.md};
`

export const SFeedbackCollection = styled.span`
  ${flex({})};
  ${font({ fontKey: 'secondary', sizeKey: 'md' })};
  font-weight: 600;
  ${borderRadius({ radiusKey: 'md' })};
  ${padding({ spaceKey: 'md' })};
  width: 70%;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  word-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.feedback.success};
`

export const SContainerButtonAdd = styled.div`
  ${flex({ justfy: 'end' })};
  width: 100%;
  height: 100%;

  .buttonAdd {
    ${font({ fontKey: 'secondary', sizeKey: 'md' })}
    width: 50px;
  };
`
