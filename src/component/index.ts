import styled, { keyframes } from 'styled-components';
import { globalProps } from './index.types';

export const LoaderContainer = styled.div<globalProps>`
    position: fixed;
    background: white;
    height: 100vh;
    width: 100%;
    display: ${({ hide }) => hide ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

const SpinnerAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    :after {
        content: " ";
        display: block;
        width: 72px;
        height: 72px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #b1b1b1;
        border-color: #b1b1b1 transparent #b1b1b1 transparent;
        animation: ${SpinnerAnimation} 1.2s linear infinite;
    }
`;
