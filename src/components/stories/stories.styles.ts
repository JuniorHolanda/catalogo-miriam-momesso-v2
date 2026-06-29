import { borderRadius, flex, font, gap, padding } from '@/styles/mixins';
import styled from 'styled-components';
import CustomLink from '../ui/Link';

export const SContainerStories = styled.div`
  ${flex({})};
  ${borderRadius({ radiusKey: 'lg' })};
  position: relative;
  height:100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  background-color: transparent;
  `;

export const SContent = styled.div`
  ${flex({direction:'column'})};
  ${gap({spaceKey:'md'})}
  position: absolute;
  width: 100%;
  height: fit-content;
  bottom: 0;
  ${padding({ spaceKey: 'md' })};
  background-image: linear-gradient( #00000000, #130d497a 90%);
  
`;

export const SInfo = styled.div`
  ${flex({ direction: 'column' })};
  width: 100%;

  h1 {
    ${font({ fontKey: 'secondary', sizeKey: 'xsm' })};
    font-weight: 600;
    width: 100%;
    color: ${({ theme }) => theme.colors.title.primary};
  }

  p {
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })};
    font-weight: 600;
    width: 100%;
    color: ${({ theme }) => theme.colors.title.reverse};
  }
`;

export const SBtnCategory = styled(CustomLink)`
  width: 100%;
  z-index: 1000; // solução temporária
`;

export const SStories = styled.div`
  ${flex({})};
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;
