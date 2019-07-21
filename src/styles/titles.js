import styled from 'styled-components';
import { grayBottomLine, grayLeftLine, transition } from './mixins';

export const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 50px;
    ${grayBottomLine}
`;

export const SubTitle = styled.h2`
    font-size: 30px;
    font-weight: 400;
    display: inline-block;
    line-height: 120%;
    ${grayLeftLine}
    ${transition}

    &:hover {
        border-left: 7px solid ${props => props.theme.blue};
    }
`;
