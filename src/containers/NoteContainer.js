import React from 'react';

import NoteDetails from '../components/NoteDetails';

const NotesContainer = ({ data: { note } }) => {
    if (!note) return <h1>No Note</h1>;

    return <NoteDetails {...note} />;
};

export default NotesContainer;
