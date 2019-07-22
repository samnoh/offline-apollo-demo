import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import { REMOVE_NOTE } from '../apollo/queries';
import NotFoundPage from '../pages/NotFoundPage';
import NoteDetails from '../components/NoteDetails';
import { GrayButton, LargeButton } from '../styles/buttons';

const NotesContainer = ({ data: { note }, history }) => {
    if (!note) return <NotFoundPage />;

    const remove = async remove => {
        if (window.confirm('Are you sure to delete it?')) {
            await remove();
            history.push('/');
        }
    };

    return (
        <>
            <Link to="/">
                <GrayButton left>Back</GrayButton>
            </Link>
            <Mutation mutation={REMOVE_NOTE} variables={{ id: note.id }}>
                {removeNote => {
                    return (
                        <GrayButton
                            onClick={() => {
                                remove(removeNote);
                            }}
                            red
                        >
                            Delete
                        </GrayButton>
                    );
                }}
            </Mutation>
            <Link to={`/edit/${note.id}`}>
                <LargeButton green>Edit</LargeButton>
            </Link>
            <NoteDetails {...note} />
        </>
    );
};

export default withRouter(NotesContainer);
