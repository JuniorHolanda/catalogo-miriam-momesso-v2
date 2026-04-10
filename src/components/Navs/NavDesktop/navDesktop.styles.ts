'use  client';

import { flex, font, gap, padding, smoothTransition } from '@/styles/mixins';
import styled from 'styled-components';

export const Snav = styled.div`
  ${flex({})}
  ${gap({ spaceKey: 'md' })} 
  flex: 1;
  height: 100%;
  ${font({ sizeKey: 'sm', fontKey: 'secondary' })}
  font-weight: 800;
  color: ${({ theme }) => theme.colors.link.reverse};

  .liDropDown {
    position: relative;
  }

  li {
    ${flex({})}
    ${smoothTransition}
    ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
    font-weight: 400;
    cursor: pointer;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.text.reverseText};
    z-index: 1000;

    button {
      color: ${({ theme }) => theme.colors.text.reverseText};
      ${font({ fontKey: 'secondary', sizeKey: 'sm' })}
      font-weight: 400;

      &:hover {
        font-weight: 600;
      }
    }
  }
`;
