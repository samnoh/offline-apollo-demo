import React from 'react';
import Helmet from 'react-helmet';

import { Title } from '../styles/titles';

const NoteDetails = ({ id, title, content }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Title>{title}</Title>
            <p>{content}</p>
        </>
    );
};

export default NoteDetails;
