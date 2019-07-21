import React from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import { Title } from '../styles/titles';
import MarkdownStyle from '../styles/markdown';

const NoteDetails = ({ id, title, content }) => {
    console.log(content);
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Title>{title}</Title>
            <MarkdownStyle>
                <ReactMarkdown className="markdown-body" source={content} />
            </MarkdownStyle>
        </>
    );
};

export default NoteDetails;
