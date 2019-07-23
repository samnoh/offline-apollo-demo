import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

import { REMOVE_NOTE } from '../apollo/queries';
import NotFoundPage from '../pages/NotFoundPage';
import NoteDetails from '../components/NoteDetails';
import { GrayButton, LargeButton, StickyButton } from '../styles/buttons';
import downloadFile from '../utils/downloadFile';
import codeHighlight from '../utils/prism';

const NotesContainer = ({ data: { note }, history }) => {
    useEffect(() => {
        codeHighlight();
    }, []);

    const remove = useCallback(
        async remove => {
            if (window.confirm('Are you sure to delete it?')) {
                await remove();
                history.push('/');
            }
        },
        [history]
    );

    if (!note) return <NotFoundPage />;

    return (
        <>
            <Link to="/">
                <GrayButton left>
                    <FontAwesomeIcon icon="chevron-left" />
                </GrayButton>
            </Link>
            <StickyButton onClick={() => downloadFile(note.title, note.content)} show transparent>
                <FontAwesomeIcon icon={faSave} size="2x" />
            </StickyButton>
            <Mutation mutation={REMOVE_NOTE} variables={{ id: note.id }}>
                {removeNote => {
                    return (
                        <GrayButton
                            onClick={() => {
                                remove(removeNote);
                            }}
                            red
                        >
                            <FontAwesomeIcon icon={faTrash} />
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
