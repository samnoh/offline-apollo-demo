import React from 'react';
import { Link } from 'react-router-dom';

import NoteDetails from '../components/NoteDetails';
import { GrayButton } from '../styles/buttons';

const NotesContainer = ({ data: { note } }) => {
    if (!note) return <h1>No Note</h1>;

    return (
        <>
            <Link to="/">
                <GrayButton>Back</GrayButton>
            </Link>
            <NoteDetails {...note} />
        </>
    );
};

export default NotesContainer;
