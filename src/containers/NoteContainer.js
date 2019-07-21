import React from 'react';
import { Link } from 'react-router-dom';

import NoteDetails from '../components/NoteDetails';
import { BackButton } from '../styles/buttons';

const NotesContainer = ({ data: { note } }) => {
    if (!note) return <h1>No Note</h1>;

    return (
        <>
            <Link to="/">
                <BackButton>Back</BackButton>
            </Link>
            <NoteDetails {...note} />
        </>
    );
};

export default NotesContainer;
