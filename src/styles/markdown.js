import styled from 'styled-components';
import markdownStyles from 'github-markdown-css';

export default styled.div`
    ${markdownStyles}
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
`;
