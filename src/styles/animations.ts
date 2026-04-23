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


export const entraceToBottomCollection = keyframes`
    from {
        transform: translateX(-100%);
    } to {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const entraceToLeft = keyframes`
    from {
        transform: translateX(100%);
    } to {
        transform: translateX(0);
        opacity: 1;
    }
`;