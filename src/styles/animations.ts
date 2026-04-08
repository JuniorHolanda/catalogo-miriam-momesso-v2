import { keyframes } from 'styled-components';

export const rotatePendulum = keyframes`
    from {
        transform: rotate(0);
    } to {
        transform: rotate(90deg);
    }
`;


export const entraceToTop = keyframes`
    from {
        transform: translateY(10px);
    } to {
        transform: translateY(0);
        opacity: 1;
    }
`;