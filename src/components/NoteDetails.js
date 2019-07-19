import React from 'react';

const NoteDetails = ({ id, title, content }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{content}</p>
        </>
    );
};

export default NoteDetails;
