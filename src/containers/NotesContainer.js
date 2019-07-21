import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Note from '../components/Note';
import { Title } from '../styles/titles';
import { AddButton } from '../styles/buttons';

const NotesContainer = ({ data: { notes } }) => {
    return (
        <>
            <Helmet>
                <title>Note | {'' + notes.length}</title>
            </Helmet>
            <Link to="/add">
                <AddButton>New</AddButton>
            </Link>
            <Title>Notes</Title>
            {notes && notes.map(note => <Note key={note.id} {...note} />)}
        </>
    );
};

export default NotesContainer;
