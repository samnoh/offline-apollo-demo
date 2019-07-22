import React, { useState, useCallback, useEffect } from 'react';
import { withRouter, Prompt } from 'react-router-dom';
import Helmet from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

import { GrayButton, LargeButton, StickyButton } from '../styles/buttons';
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
            return true;
        }
        return false;
    }, []);

    useEffect(() => {
        enablePrevent();

        return () => {
            disablePrevent(); // componentDidUnmount
        };
    }, [enablePrevent, disablePrevent]);

    return (
        <>
            <Helmet>
                <title>{id ? 'Edit Note' : 'Add Note'}</title>
            </Helmet>
            <Prompt when={shouldPrevent} message={preventLeave} />
            <GrayButton onClick={history.goBack} left>
                <FontAwesomeIcon icon="chevron-left" />
            </GrayButton>
            <GrayButton onClick={resetVals} red>
                <FontAwesomeIcon icon={faHistory} />
            </GrayButton>
            <LargeButton onClick={submitNote}>Save</LargeButton>
            <StickyButton onClick={() => toggleEditview(!editView)} transparent>
                <FontAwesomeIcon icon={editView ? faMarkdown : faFont} size="2x" />
            </StickyButton>
            <NoteEditor
                {...{
                    id,
                    titleVal,
                    contentVal,
                    editView,
                    setTitleVal,
                    setContentVal
                }}
            />
        </>
    );
};

export default withRouter(EditorContainer);
