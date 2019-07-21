import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Note from '../components/Note';
import { Title } from '../styles/titles';
import { AddButton } from '../styles/buttons';

const NotesContainer = ({ data: { notes } }) => {
    if (notes.length === 0) return <h1>No Notes</h1>;

    return (
        <>
            <Helmet>
                <title>Note | {'' + notes.length}</title>
            </Helmet>
            <Link to="/add">
                <AddButton>Add</AddButton>
            </Link>
            <Title>Notes</Title>
            {notes.map(note => (
                <Note key={note.id} {...note} />
            ))}
        </>
    );
};

export default NotesContainer;
