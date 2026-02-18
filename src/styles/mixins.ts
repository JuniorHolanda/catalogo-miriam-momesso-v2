import { css } from 'styled-components';

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

export const boxShadow = css`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const textLink = css`
  font-family: var(--font-common);
  font-weight: 400;
  font-size: clamp(.7em, .9em, 1vw);
`;

export const smoothTransition = css`
  transition: all 0.3s ease;
`;
