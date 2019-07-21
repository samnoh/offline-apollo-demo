import styled from 'styled-components';

import { buttons, transition } from './mixins';

export const GrayButton = styled.div`
    ${buttons}
    top: 30px;
    left: 100px;
    ${transition}

    @media (max-width: ${props => props.theme.breakpoints.medium}) {
        left: 10px;
    }
`;
