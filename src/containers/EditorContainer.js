import React, { useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import NoteEditor from '../components/NoteEditor';
import usePreventLeave from '../hooks/usePreventLeave';

const EditorContainer = ({ id, title = '', content = '', submit, history }) => {
    const [titleVal, setTitleVal] = useState(title);
    const [contentVal, setContentVal] = useState(content);
    const [editView, toggleEditview] = useState(true);
    const [enablePrevent] = usePreventLeave();

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
        history.push(id ? `/note/${id}` : '/');
    }, [id, titleVal, contentVal, submit, history]);

    useEffect(() => {
        enablePrevent();
    }, [enablePrevent]);

    return (
        <NoteEditor
            {...{
                id,
                titleVal,
                contentVal,
                editView,
                setTitleVal,
                setContentVal,
                resetVals,
                submitNote,
                toggleEditview,
                history
            }}
        />
    );
};

export default withRouter(EditorContainer);
