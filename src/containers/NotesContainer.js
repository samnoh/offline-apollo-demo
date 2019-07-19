import React from 'react';

import Note from '../components/Note';

const NotesContainer = ({ data }) => {
    if (data.notes.length === 0) return <h1>No Notes</h1>;

    return (
        <>
            {data.notes.map(note => (
                <Note key={note.id} {...note} />
            ))}
        </>
    );
};

export default NotesContainer;
