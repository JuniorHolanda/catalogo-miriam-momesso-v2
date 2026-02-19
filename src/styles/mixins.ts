import { css } from 'styled-components';
import { defaultTheme } from '@/themes/theme';

/*====================display=====================*/

type propsFlex = {
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justfy?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
};
export const flex = ({ direction = 'row', align = 'center', justfy = 'center' }: propsFlex) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justfy};
`;

/*====================spaces=====================*/

type propsSpace = {
  spaceKey: keyof typeof defaultTheme.spaces;
}

export const gap = ({spaceKey ='sm' } : propsSpace) => css`
  gap: ${({ theme }) => theme.spaces[spaceKey]};
`; 

export const padding = ({spaceKey ='sm' } : propsSpace) => css`
  padding: ${({ theme }) => theme.spaces[spaceKey]};
`;

export const margin = ({spaceKey ='sm' } : propsSpace) => css`
  margin: ${({ theme }) => theme.spaces[spaceKey]};
`; 

/*====================font=====================*/

type propsFont = {
  fontKey: keyof typeof defaultTheme.fonts;
  sizeKey?: keyof typeof defaultTheme.fontSize;
};

export const font = ({fontKey, sizeKey = 'md' }: propsFont) => css`
  font-family: ${({theme}) => theme.fonts[fontKey]};
  font-size: ${({theme}) => theme.fontSize[sizeKey]};
`;

/*====================border=====================*/

type propsBorderRadius = {
  radiusKey: keyof typeof defaultTheme.spaces;
}

export const borderRadius = ({radiusKey = 'md'}: propsBorderRadius) => css`
  border-radius: ${({theme}) => theme.spaces[radiusKey]};
`;

type propsBorder = {
  borderKey: keyof typeof defaultTheme.border;
  dashKey?:  | "solid" | "dashed" | "dotted";
}

export const border = ({borderKey = 'md', dashKey = 'solid'}: propsBorder) => css`
  border-width:  ${({theme}) => theme.spaces[borderKey]};
  border-style: ${dashKey};
`;









export const smoothTransition = css`
  transition: all 0.3s ease;
`;


