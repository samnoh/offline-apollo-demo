import React from 'react';

import Note from '../components/Note';

const NotesContainer = ({ data }) => {
    if (!data.notes) return null;

    return (
        <>
            {data.notes.map(note => (
                <Note {...note} />
            ))}
        </>
    );
};

export default NotesContainer;
