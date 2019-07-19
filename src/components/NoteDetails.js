import React from 'react';

const NoteDetails = ({ title, content }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{content}</p>
        </>
    );
};

export default NoteDetails;
