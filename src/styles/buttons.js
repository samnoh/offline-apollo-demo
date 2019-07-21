import styled, { css } from 'styled-components';

import { buttons } from './mixins';

export const BackButton = styled.div`
    ${buttons}

    top: 30px;
    left: 111px;
    @media (max-width: ${props => props.theme.breakpoints.medium}) {
        left: 20px;
    }
`;
