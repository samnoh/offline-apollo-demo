import React from 'react';
import { Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import { REMOVE_NOTE } from '../apollo/queries';
import NotFoundPage from '../pages/NotFoundPage';
import NoteDetails from '../components/NoteDetails';
import { GrayButton, LargeButton, StickyButton } from '../styles/buttons';

const NotesContainer = ({ data: { note }, history }) => {
    if (!note) return <NotFoundPage />;

    const remove = async remove => {
        if (window.confirm('Are you sure to delete it?')) {
            await remove();
            history.push('/');
        }
    };

    const downloadFile = () => {
        const element = document.createElement('a');
        const file = new Blob([note.content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${note.title}`;
        document.body.appendChild(element);
        element.click();
    };

    return (
        <>
            <Link to="/">
                <GrayButton left>
                    <i className="fas fa-chevron-left fa-lg" />
                </GrayButton>
            </Link>
            <StickyButton onClick={downloadFile} show transparent>
                <i className="fas fa-save fa-2x" />
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
                            <i className="fas fa-trash fa-xl" />
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
