import React from 'react';

import NoteDetails from '../components/NoteDetails';

const NotesContainer = ({ data }) => {
    if (!data.note) return <h1>No Note</h1>;

    const note = data.note;
    return <NoteDetails {...note} />;
};

export default NotesContainer;
