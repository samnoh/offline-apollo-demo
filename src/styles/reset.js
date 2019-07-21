import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}

    body {
        font-family: 'Roboto', sans-serif;
        margin: 70px 110px;
        box-sizing: border-box;
        color: ${props => props.theme.black}

        @media(max-width: ${props => props.theme.breakpoints.medium}) {
            margin: 70px 20px;
        }
    }

    a {
        text-decoration: inherit;
        color: inherit;
    }

    * {
        box-sizing: inherit;
    }
`;
