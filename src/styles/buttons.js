import styled from 'styled-components';

import { buttons, transition } from './mixins';

export const GrayButton = styled.div`
    ${buttons}
    ${transition}
    top: 30px;

    ${({ left }) => (left ? `left: 100px;` : `right: 100px;`)}

    &:hover {
        background-color: ${props => props.green && props.theme.green};
    }

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
        ${({ left }) => (left ? `left: 10px;` : `right: 10px;`)}
    }
`;

export const AddButton = styled.div`
    ${buttons}
    ${transition}
    font-size: 25px;
    top: 95px;
    right: 100px;

    &:hover {
        background-color: ${({ theme }) => theme.blue};
    }

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.medium}) {
        top: 85px;
        right: 10px;
    }
`;
