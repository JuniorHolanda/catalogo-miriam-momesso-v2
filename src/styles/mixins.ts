import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type propsFlex = {
  direction: string,
  align: string,
  justfy: string,
}

export const flex = ({direction = 'row', align = 'start', justfy = 'start' }: propsFlex) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justfy};
`;

export const boxShadow = css`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;


export const smoothTransition = css`
  transition: all .3s ease;
`;

export const blurBg = css`
   &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
  }
`