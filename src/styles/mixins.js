import { css } from 'styled-components';

export const boxShadow = css`
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const grayBottomLine = css`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
`;

export const grayLeftLine = css`
    border-left: 7px solid rgba(0, 0, 0, 0.1);
    padding-left: 10px;
`;

export const buttons = css`
    font-size: 18px;
    color: ${props => props.theme.gray};
    cursor: pointer;
    position: absolute;
`;
