import React, { useState, useCallback } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ReactMarkdown from 'react-markdown';
import { withRouter } from 'react-router-dom';

import MarkdownStyle from '../styles/markdown';

const NoteEditor = ({ id, title = '', content = '', submit, history }) => {
    const [titleVal, setTitleVal] = useState(title);
    const [contentVal, setContentVal] = useState(content);

    const submitNote = useCallback(() => {
        if (titleVal === '' || contentVal === '') {
            alert('No');
            return;
        }
        submit({ variables: { id, title: titleVal, content: contentVal } });
        history.push('/');
    }, [id, titleVal, contentVal, submit, history]);

    return (
        <>
            <button onClick={submitNote}>Add</button>
            <TextareaAutosize value={titleVal} onChange={e => setTitleVal(e.target.value)} />
            <TextareaAutosize value={contentVal} onChange={e => setContentVal(e.target.value)} />
            <MarkdownStyle>
                <ReactMarkdown className="markdown-body" source={contentVal} />
            </MarkdownStyle>
        </>
    );
};

export default withRouter(NoteEditor);
