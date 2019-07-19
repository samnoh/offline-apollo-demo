import React from 'react';
import Helmet from 'react-helmet';

import Note from '../components/Note';

const NotesContainer = ({ data: { notes } }) => {
    if (notes.length === 0) return <h1>No Notes</h1>;

    return (
        <>
            <Helmet>
                <title>Note | {'' + notes.length}</title>
            </Helmet>
            {notes.map(note => (
                <Note key={note.id} {...note} />
            ))}
        </>
    );
};

export default NotesContainer;
