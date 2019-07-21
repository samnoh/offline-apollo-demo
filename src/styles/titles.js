import styled from 'styled-components';
import { grayBottomLine, grayLeftLine } from './mixins';

export const Title = styled.h1`
    font-size: 50px;
    margin-bottom: 50px;
    ${grayBottomLine}
`;

export const SubTitle = styled.h2`
    font-size: 30px;
    font-weight: 400;
    display: inline-block;
    ${grayLeftLine}
`;
