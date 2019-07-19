import React from 'react';
import Helmet from 'react-helmet';

const NoteDetails = ({ id, title, content }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <h1>{title}</h1>
            <p>{content}</p>
        </>
    );
};

export default NoteDetails;
