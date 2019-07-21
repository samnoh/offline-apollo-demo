import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import NoteEditor from '../components/NoteEditor';
import { GrayButton, AddButton, ShowButton } from '../styles/buttons';

const EditorContainer = ({ id, title = '', content = '', submit, history }) => {
    const [titleVal, setTitleVal] = useState(title);
    const [contentVal, setContentVal] = useState(content);
    const [editView, toggleEditview] = useState(true);

    const resetVals = useCallback(() => {
        if (window.confirm('Are you sure to reset?')) {
            setTitleVal(title ? title : '');
            setContentVal(content ? content : '');
        }
    }, [title, content, setTitleVal, setContentVal]);

    const submitNote = useCallback(() => {
        if (titleVal === '' || contentVal === '') {
            alert('Your note is empty...');
            return;
        }

        submit({ variables: { id, title: titleVal, content: contentVal } });
        history.push(`/note/${id}`);
    }, [id, titleVal, contentVal, submit, history]);

    return (
        <>
            <GrayButton onClick={() => history.push('/')} left>
                Back
            </GrayButton>
            <GrayButton onClick={resetVals}>Reset</GrayButton>
            <AddButton onClick={submitNote}>Save</AddButton>
            <ShowButton onClick={() => toggleEditview(!editView)}>
                {editView ? 'Preview' : 'Edit'}
            </ShowButton>
            <NoteEditor {...{ id, titleVal, contentVal, editView, setTitleVal, setContentVal }} />
        </>
    );
};

export default withRouter(EditorContainer);
