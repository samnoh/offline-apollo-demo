import styled from 'styled-components';

import { buttons, transition } from './mixins';

export const GrayButton = styled.div`
    ${buttons}
    ${transition}
    top: 30px;

    ${({ left }) => (left ? `left: 100px;` : `right: 100px;`)}

    &:hover {
        background-color: ${({ green, red, theme }) => {
            if (red) return theme.red;
            if (green) return theme.green;
            return theme.gray;
        }};
    }

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
        ${({ left }) => (left ? `left: 10px;` : `right: 10px;`)}
    }
`;

export const LargeButton = styled.div`
    ${buttons}
    ${transition}
    font-size: 25px;
    top: 95px;
    right: 100px;

    &:hover {
        background-color: ${({ green, theme }) => {
            if (green) return theme.green;
            return theme.blue;
        }};
    }

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
        top: 85px;
        right: 10px;
    }
`;

export const ShowButton = styled.div`
    ${transition}
    cursor: pointer;
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 20px;
    border-raidus: 7px;
    background-color: ${({ theme: { gray } }) => gray};

    &:hover {
        background-color: ${({ theme: { blue } }) => blue};
    }

    @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
        display: none;
    }
`;
