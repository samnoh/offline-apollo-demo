import React, { useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import NoteEditor from '../components/NoteEditor';
import usePreventLeave from '../hooks/usePreventLeave';

const EditorContainer = ({ id, title = '', content = '', submit, history }) => {
    const [titleVal, setTitleVal] = useState(title);
    const [contentVal, setContentVal] = useState(content);
    const [editView, toggleEditview] = useState(true);
    const [shouldPrevent, setPrevent] = useState(true);
    const [enablePrevent, disablePrevent] = usePreventLeave();

    const resetVals = useCallback(() => {
        if (window.confirm('Are you sure to reset?')) {
            setTitleVal(title ? title : '');
            setContentVal(content ? content : '');
        }
    }, [title, content, setTitleVal, setContentVal]);

    const submitNote = useCallback(async () => {
        if (titleVal === '' || contentVal === '') {
            alert('Your note is empty...');
            return;
        }

        await setPrevent(false);
        submit({ variables: { id, title: titleVal, content: contentVal } });
        history.push(id ? `/note/${id}` : '/');
    }, [id, titleVal, contentVal, submit, history]);

    const preventLeave = useCallback(() => {
        if (window.confirm('Are you sure to leave?')) {
            disablePrevent();
            return true;
        }
        return false;
    }, [disablePrevent]);

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
                shouldPrevent,
                preventLeave,
                history
            }}
        />
    );
};

export default withRouter(EditorContainer);
